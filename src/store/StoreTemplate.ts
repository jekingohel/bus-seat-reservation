const StoreTemplate = function (defaultState: any, container: any) {
  return function (state = defaultState, action: any) {
    if (typeof container[action.type] === "function") {
      return container[action.type](state, action.payload)
    }
    return state
  }
}

export default StoreTemplate
