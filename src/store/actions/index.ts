import * as actionType from "../actions/actionTypes"
// --------------------------------------------------------------------------------
// Init
// --------------------------------------------------------------------------------
export const InitSetDone = () => {
  return {
    type: actionType.ACTION_INIT_SET_DONE,
  }
}

export const InitUnsetDone = () => {
  return {
    type: actionType.ACTION_INIT_UNSET_DONE,
  }
}

export const InitHandleCount = (count: number) => {
  return {
    type: actionType.ACTION_INIT_HANDLE_COUNT,
    payload: count,
  }
}
