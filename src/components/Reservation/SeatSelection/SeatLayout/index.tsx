import { Passanger } from "store/types"
import LowerSeats from "./LowerSeats"
import UpperSeats from "./UpperSeats"
import { store as Store } from "store"

const SeatLayout = () => {
  const passangers = Store.getState().BookedPassangers.passangers
  const bookedSeats = passangers.map((passanger: Passanger) => passanger.seat)
  return (
    <div>
      <LowerSeats bookedSeats={bookedSeats} />
      <UpperSeats bookedSeats={bookedSeats} />
    </div>
  )
}

export default SeatLayout
