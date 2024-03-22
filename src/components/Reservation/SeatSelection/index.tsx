import { Card, CardContent } from "components/ui/Card"
import BusDetails from "./BusDetails"
import SeatAvailabilityInfo from "./SeatAvailabilityInfo"
import SeatLayout from "./SeatLayout"

const SeatSelection = () => {
  return (
    <Card className="mt-5">
      <BusDetails />
      <div className="border-solid border-b-2 border-slate-200 my-2" />
      <CardContent className="w-full p-3">
        <SeatAvailabilityInfo />
        <SeatLayout />
      </CardContent>
    </Card>
  )
}

export default SeatSelection
