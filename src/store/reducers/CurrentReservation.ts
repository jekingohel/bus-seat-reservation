import * as actionType from "store/actions/actionTypes"
import StoreTemplate from "store/StoreTemplate"
import DefaultToObject from "store/defaults/DefaultToObject"
import DefaultToArray from "store/defaults/DefaultToArray"

import { addDays } from "date-fns"
import { Passanger } from "store/types"

const container = DefaultToObject()

const defaultState = function () {
  return {
    boardingDate: "2024-03-20 21:50",
    dropingDate: "2024-03-21 21:50",
    passangers: DefaultToArray(),
  }
}

const CurrentReservation = StoreTemplate(defaultState(), container)

container[actionType.ACTION_CURRENT_RESERVATION_SET_DATE] = function (
  state: any,
  payload: string
) {
  const dropingDate = addDays(new Date(payload), 1)
  return {
    ...state,
    boardingDate: payload,
    dropingDate: dropingDate,
  }
}

container[actionType.ACTION_CURRENT_RESERVATION_SET_PASSANGERS] = function (
  state: any,
  payload: Passanger[]
) {
  return {
    ...state,
    passangers: payload,
  }
}

container[actionType.ACTION_CURRENT_RESERVATION_RESET_PASSANGERS] = function (
  state: any
) {
  return {
    ...state,
    passangers: [],
  }
}

export default CurrentReservation
