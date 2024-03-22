import { Button } from "components/ui/Button"
import TripDetails from "./TripDetails"
import SeatSelection from "./SeatSelection"
import PassengerDetails from "./PassengerDetails"

const Reservation = () => {
  return (
    <div className="container max-w-screen-md items-center">
      <TripDetails />
      <SeatSelection />
      <PassengerDetails />
      <Button
        className="my-5 w-full font-semibold text-md"
        onClick={() => console.log("call")}
      >
        Save Booking
      </Button>
    </div>
  )
}

export default Reservation
