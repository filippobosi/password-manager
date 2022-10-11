module OperationalWidgets.CardsManagerWidget where

import Concur.Core (Widget)
import Concur.React (HTML)
import Control.Alt ((<|>))
import Control.Applicative (pure)
import Control.Bind (bind)
import Control.Monad.Except.Trans (runExceptT)
import Data.Either (Either(..))
import Data.Function (($))
import Data.Functor ((<$>))
import Data.List ((:))
import Data.Maybe (Maybe(..))
import Data.Show (show)
import DataModel.AppState (AppError)
import DataModel.Card (emptyCard)
import DataModel.Index (Index(..), CardEntry(..))
import DataModel.WidgetState (WidgetState(..))
import Effect.Aff (Aff)
import Effect.Aff.Class (liftAff)
import Effect.Class.Console (log)
import Functions.Communication.Cards (updateIndex)
import Functions.SRP as SRP
import Views.CardsManagerView (cardsManagerView, CardView(..), CardViewAction(..), CardViewState)
import OperationalWidgets.CardWidget (IndexUpdateAction(..))

data CardsViewResult = CardsViewResult CardViewAction | OpResult Index CardViewState (Maybe AppError)

cardsManagerWidget :: forall a. SRP.SRPConf -> Index -> CardViewState -> Widget HTML a
cardsManagerWidget conf ind cardViewState = go ind (cardsManagerView ind cardViewState) Nothing Nothing

  where
    go :: Index -> (Maybe AppError -> Widget HTML CardViewAction) -> Maybe AppError -> Maybe (Aff CardsViewResult) -> Widget HTML a
    go index view mError operation = do
      res <- case operation of
        Nothing -> CardsViewResult <$> (view mError)
        Just op -> (CardsViewResult <$> (view mError)) <|> (liftAff $ op)
      case res of
        CardsViewResult cva -> case cva of 
          UpdateIndex action -> do
            _ <- log $ show action
            go index (getUpdateIndexView index action) Nothing (Just (getUpdateIndexOp conf index action))
          ShowAddCard -> go index (cardsManagerView index {cardView: (CardForm emptyCard), cardViewState: Default}) Nothing Nothing
          ShowCard ref -> go index (cardsManagerView index {cardView: (JustCard ref), cardViewState: Default}) Nothing Nothing
        OpResult i cv e -> go i (cardsManagerView i cv) e Nothing

getUpdateIndexOp :: SRP.SRPConf -> Index -> IndexUpdateAction -> Aff CardsViewResult
getUpdateIndexOp conf index@(Index_v1 list) action =
  case action of 
    AddReference _  entry -> addEntryToIndex entry 
    CloneReference entry -> addEntryToIndex entry
    _ -> pure $ OpResult index { cardView: NoCard, cardViewState: Default } Nothing

  where 
    addEntryToIndex entry@(CardEntry_v1 { title: _, cardReference, archived: _, tags: _}) = do
      let newIndex = Index_v1 (entry : list)
      updateResult <- liftAff $ runExceptT $ updateIndex conf newIndex
      case updateResult of
        Right _ -> pure $ OpResult newIndex { cardView: (JustCard cardReference), cardViewState: Default }  Nothing
        Left err -> pure $ OpResult index { cardView: NoCard, cardViewState: Default }  (Just err) 

getUpdateIndexView :: Index -> IndexUpdateAction -> (Maybe AppError -> Widget HTML CardViewAction)
getUpdateIndexView index action = 
  case action of 
    AddReference card _ -> cardsManagerView index { cardView: (CardForm card), cardViewState: Loading } 
    CloneReference (CardEntry_v1 { title: _, cardReference, archived: _, tags: _}) -> cardsManagerView index { cardView: (JustCard cardReference), cardViewState: Loading}
    _ -> cardsManagerView index { cardView: NoCard, cardViewState: Default }
