import * as actionType from "store/actions/actionTypes"
import StoreTemplate from "store/StoreTemplate"
import DefaultToObject from "store/defaults/DefaultToObject"
import DefaultToArray from "store/defaults/DefaultToArray"
import { Passanger } from "store/types"

const container = DefaultToObject()

const defaultState = function () {
  return {
    passangers: DefaultToArray(),
  }
}

const BookedPassangers = StoreTemplate(defaultState(), container)

container[actionType.ACTION_BOOKED_PASSANGERS_SET_PASSANGERS] = function (
  state: any,
  payload: Passanger[]
) {
  return {
    ...state,
    passangers: [...state.passangers, ...payload],
  }
}

container[actionType.ACTION_BOOKED_PASSANGERS_REMOVE_PASSANGER] = function (
  state: any,
  payload: Passanger
) {
  const passangers = state.passangers.filter(
    (passanger: Passanger) => passanger.email !== payload.email
  )
  return {
    ...state,
    passangers: passangers,
  }
}

container[actionType.ACTION_BOOKED_PASSANGERS_UPDATE_PASSANGER] = function (
  state: any,
  payload: Passanger
) {
  const passangers = state.passangers.map((passenger: Passanger) =>
    passenger.seat === payload.seat ? { ...passenger, ...payload } : passenger
  )
  return {
    ...state,
    passangers: passangers,
  }
}

export default BookedPassangers
