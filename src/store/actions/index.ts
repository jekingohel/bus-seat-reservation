import { Passenger } from "store/types"
import * as actionType from "../actions/actionTypes"

// --------------------------------------------------------------------------------
// Current Reservation
// --------------------------------------------------------------------------------
export const SetCurrentReservationDate = (date: string) => {
  return {
    type: actionType.ACTION_CURRENT_RESERVATION_SET_DATE,
    payload: date,
  }
}

export const SetCurrentReservationPassangers = (passangers: Passenger[]) => {
  return {
    type: actionType.ACTION_CURRENT_RESERVATION_SET_PASSANGERS,
    payload: passangers,
  }
}

export const ResetCurrentReservationPassangers = () => {
  return {
    type: actionType.ACTION_CURRENT_RESERVATION_RESET_PASSANGERS,
  }
}

export const SetBookedPassangers = (passangers: Passenger[]) => {
  return {
    type: actionType.ACTION_BOOKED_PASSANGERS_SET_PASSANGERS,
    payload: passangers,
  }
}

export const RemoveBookedPassanger = (passanger: Passenger) => {
  return {
    type: actionType.ACTION_BOOKED_PASSANGERS_REMOVE_PASSANGER,
    payload: passanger,
  }
}

export const UpdateBookedPassanger = (passanger: Passenger) => {
  return {
    type: actionType.ACTION_BOOKED_PASSANGERS_UPDATE_PASSANGER,
    payload: passanger,
  }
}
