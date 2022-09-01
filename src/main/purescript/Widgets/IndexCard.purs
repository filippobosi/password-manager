module Widgets.Index where

import Concur.Core (Widget)
import Concur.React (HTML)
import Concur.React.DOM (ol', text)
import Data.Array (fromFoldable)
import Data.Function (($))
import Data.Functor ((<$>))
import Data.List (sort)

import DataModel.Index (Index(..), CardEntry(..), CardReference)
import Widgets.SimpleWebComponents (clickableListItemWidget)

indexCard :: Index -> Widget HTML CardReference
indexCard (Index_v1 cards) = do
  let sortedCards = fromFoldable $ sort cards :: Array CardEntry
  ol' $ (\(CardEntry_v1 { title, cardReference }) -> clickableListItemWidget (text title) cardReference) <$> sortedCards