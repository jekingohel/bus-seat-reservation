import { Card, CardHeader, CardTitle } from "components/ui/Card"

import BusDetails from "./BusSeatDetails"
import BoardingDetails from "./BoardingDetails"

const TripDetails = () => {
  return (
    <Card className="mt-5">
      <CardHeader className="items-start p-4 pb-2">
        <CardTitle className="text-xl">Trip Details</CardTitle>
      </CardHeader>
      <BusDetails />
      <BoardingDetails />
    </Card>
  )
}

export default TripDetails
