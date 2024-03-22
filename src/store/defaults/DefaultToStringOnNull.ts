import DefaultToString from "./DefaultToString"

const DefaultToStringOnNull = function (value : any) {

  if (value === null) {
    return DefaultToString()
  }

  return value
}

export default DefaultToStringOnNull
