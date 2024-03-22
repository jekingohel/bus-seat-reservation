import * as actionType from "../actions/actionTypes"
import StoreTemplate from "../StoreTemplate"
import DefaultToFalse from "./../defaults/DefaultToFalse"
import DefaultToObject from "./../defaults/DefaultToObject"

const container = DefaultToObject()

const defaultState = function () {
  return {
    done: DefaultToFalse(),
    count: 0,
  }
}

const Init = StoreTemplate(defaultState(), container)

container[actionType.ACTION_INIT_SET_DONE] = function (state: any) {
  return {
    ...state,
    done: true,
  }
}

container[actionType.ACTION_INIT_UNSET_DONE] = function (state: any) {
  return {
    ...state,
    done: false,
  }
}

container[actionType.ACTION_INIT_HANDLE_COUNT] = function (
  state: any,
  payload: number
) {
  return {
    ...state,
    count: state.count + payload,
  }
}

export default Init
