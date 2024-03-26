import TripDetails from "./TripDetails"
import SeatSelection from "./SeatSelection"
import PassengerDetails from "./PassengerDetails"

const Reservation = () => {
  return (
    <div className="container max-w-screen-md items-center mb-5">
      <TripDetails />
      <SeatSelection />
      <PassengerDetails />
    </div>
  )
}

export default Reservation
