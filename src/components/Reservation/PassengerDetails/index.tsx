import { Card, CardContent, CardHeader, CardTitle } from "components/ui/Card"
import PassengerForm from "./PassengerForm"

const PassengerDetails = () => {
  return (
    <Card className="mt-5">
      <CardHeader className="items-start p-4 pb-2">
        <CardTitle className="text-xl">Passengers Details</CardTitle>
      </CardHeader>
      <CardContent className="w-full px-4 inline-flex flex-col items-start">
        <PassengerForm />
      </CardContent>
    </Card>
  )
}

export default PassengerDetails
