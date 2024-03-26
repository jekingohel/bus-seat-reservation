import { combineReducers } from "redux"
import CurrentReservation from "./CurrentReservation"
import BookedPassangers from "./BookedPassangers"

const CollectionOfReducers = combineReducers({
  CurrentReservation,
  BookedPassangers,
})

export default CollectionOfReducers
