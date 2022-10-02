module DataModel.AsyncValue where

import Data.Maybe (Maybe(..))
import Data.Semigroup ((<>))
import Data.Show (class Show, show)

import Data.Argonaut.Decode.Class (class DecodeJson)
import Data.Argonaut.Decode.Generic (genericDecodeJson)
import Data.Argonaut.Encode.Class (class EncodeJson)
import Data.Argonaut.Encode.Generic (genericEncodeJson)
import Data.Generic.Rep (class Generic)

data AsyncValue a = Loading (Maybe a) | Done a
instance showAsyncValue :: (Show a) => Show (AsyncValue a) where
    show (Loading p) = "loading[" <> show p <> "]"
    show (Done p) = "done[" <> show p <> "]"

-- repToAsyncValue

derive instance genericAsyncValue :: Generic (AsyncValue a) _

instance encodeJsonAsyncValue :: EncodeJson a => EncodeJson (AsyncValue a) where
  encodeJson a = genericEncodeJson a

instance decodeJsonAsyncValue :: DecodeJson a => DecodeJson (AsyncValue a) where
  decodeJson a = genericDecodeJson a

arrayFromAsyncValue :: forall a. AsyncValue a -> Array a
arrayFromAsyncValue (Loading _) = []
arrayFromAsyncValue (Done a) = [a]

changeToLoading :: forall a. AsyncValue a -> AsyncValue a
changeToLoading async =
  case async of
    Done value -> Loading (Just value)
    Loading value -> Loading value