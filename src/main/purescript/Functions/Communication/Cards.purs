module Functions.Communication.Cards where

import Affjax.RequestBody (RequestBody, json)
import Affjax.ResponseFormat as RF
import Control.Applicative (pure)
import Control.Bind (discard, bind)
import Control.Monad.Except.Trans (ExceptT(..), withExceptT, except)
import Control.Semigroupoid ((>>>))
import Crypto.Subtle.Constants.AES (aesCTR, l256)
import Crypto.Subtle.Key.Import as KI
import Crypto.Subtle.Key.Generate as KG
import Crypto.Subtle.Key.Types (encrypt, exportKey, decrypt, raw, unwrapKey, CryptoKey)
import Data.Argonaut.Decode.Class (decodeJson)
import Data.Argonaut.Encode.Class (encodeJson)
import Data.ArrayBuffer.Types (ArrayBuffer)
import Data.Either (Either(..), note)
import Data.Function (($))
import Data.Functor ((<$>))
import Data.HexString (toArrayBuffer, fromArrayBuffer)
import Data.HTTP.Method (Method(..))
import Data.List (List(..), (:))
import Data.Maybe (Maybe(..))
import Data.Newtype (unwrap)
import Data.Show (show)
import Data.String.Common (joinWith)
import Data.Tuple (Tuple(..))
import Data.Unit (Unit, unit)
import DataModel.AppState (AppError(..), InvalidStateError(..))
import DataModel.Card (Card)
import DataModel.Communication.ProtocolError (ProtocolError(..))
import DataModel.Index (CardReference(..), Index, CardEntry(..), createCardEntry)
import DataModel.SRP (hashFuncSHA256)
import DataModel.User (UserCard(..), IndexReference(..))
import Effect.Aff (Aff)
import Effect.Class (liftEffect)
import Functions.Card (getCardContent)
import Functions.CardsCache (getCardFromCache, addCardToCache)
import Functions.Communication.BackendCommunication (isStatusCodeOk, manageGenericRequest)
import Functions.Communication.Blobs (postBlob, getBlob, deleteBlob)
import Functions.EncodeDecode (encryptJson)
import Functions.Index (getIndexContent)
import Functions.JSState (getAppState, modifyAppState)
import Functions.State (getHashFromState)

getCard :: CardReference -> ExceptT AppError Aff Card
getCard cardRef@(CardReference { reference }) = do
  maybeCard <- getCardFromCache reference
  case maybeCard of
    Just card -> pure $ card
    Nothing -> do
      blob <- getBlob reference
      card <- getCardContent blob cardRef
      addCardToCache reference card
      pure $ card

deleteCard :: CardReference -> ExceptT AppError Aff String
deleteCard cardReference@(CardReference { reference, key }) = do
  -- deleteBlob reference
  let url = joinWith "/" ["blobs", show reference]
  card <- getCard cardReference
  cryptoKey <- ExceptT $ Right <$> KI.importKey raw (toArrayBuffer key) (KI.aes aesCTR) false [encrypt, decrypt, unwrapKey]
  encryptedCard <- ExceptT $ Right <$> encryptJson cryptoKey card
  let body = json $ encodeJson $ { data: fromArrayBuffer encryptedCard, hash: reference } :: RequestBody
  response <- manageGenericRequest url DELETE (Just body) RF.string
  if isStatusCodeOk response.status
    then except $ Right $ response.body
    else except $ Left $ ProtocolError $ ResponseError $ unwrap response.status

postCard :: Card -> ExceptT AppError Aff CardEntry
postCard card = do
  key <- ExceptT $ Right <$> (KG.generateKey (KG.aes aesCTR l256) true [encrypt, decrypt, unwrapKey])
  _ <- ExceptT $ Right <$> (fromArrayBuffer <$> exportKey raw key)
  Tuple encryptedCard cardEntry <- ExceptT $ Right <$> (createCardEntry card key hashFuncSHA256)
  case cardEntry of
    CardEntry { title: _
                 , cardReference: (CardReference { reference, key: _ })
                 , archived: _
                 , tags: _
                 } -> do
      _ <- postBlob encryptedCard (toArrayBuffer reference)
      addCardToCache reference card
      pure cardEntry
