import { Card, CardContent } from "components/ui/Card"
import BusDetails from "./BusDetails"
import SeatAvailabilityInfo from "./SeatAvailabilityInfo"

const SeatSelection = () => {
  return (
    <Card className="mt-5">
      <BusDetails />
      <div className="border-solid border-b-2 border-slate-200 my-2" />
      <CardContent className="w-full p-3">
        <SeatAvailabilityInfo />
        <Card className="mt-5">
          <h4 className="font-normal">Upper</h4>
        </Card>
        <Card className="mt-5">
          <h4 className="font-normal">Lower</h4>
        </Card>
      </CardContent>
    </Card>
  )
}

export default SeatSelection
