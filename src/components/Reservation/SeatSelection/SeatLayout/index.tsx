import { Passenger } from "store/types"
import LowerSeats from "./LowerSeats"
import UpperSeats from "./UpperSeats"
import { store as Store } from "store"
import { SelectedSeatsProvider } from "./SelectedSeatsContext"

const SeatLayout = () => {
  const passangers = Store.getState().BookedPassangers.passangers
  const bookedSeats = passangers.map((passanger: Passenger) => passanger.seat)
  return (
    <SelectedSeatsProvider>
      <LowerSeats bookedSeats={bookedSeats} />
      <UpperSeats bookedSeats={bookedSeats} />
    </SelectedSeatsProvider>
  )
}

export default SeatLayout
