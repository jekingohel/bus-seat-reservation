import { Card, CardContent, CardHeader, CardTitle } from "components/ui/Card"
import { Input } from "components/ui/Input"

const PassengerDetailsForm = () => {
  return (
    <Card className="mt-5">
      <CardHeader className="items-start p-4 pb-2">
        <CardTitle className="text-xl">Passenger Details</CardTitle>
      </CardHeader>
      <CardContent className="w-full px-4 inline-flex flex-col items-start">
        <h4 className="font-medium pt-2 pb-2">
          Add Passenger for :{" "}
          <span className="font-normal" style={{ color: "#65a30d" }}>
            DU4
          </span>
        </h4>
        <div className="w-full inline-flex flex-row items-start gap-2.5">
          <Input type="name" placeholder="Name" />
          <Input type="email" placeholder="Email" />
        </div>
        <h4 className="font-medium pt-3 pb-2">
          Add Passenger for :{" "}
          <span className="font-normal" style={{ color: "#65a30d" }}>
            DU3
          </span>
        </h4>
        <div className="w-full inline-flex flex-row items-start gap-2.5">
          <Input type="name" placeholder="Name" />
          <Input type="email" placeholder="Email" />
        </div>
      </CardContent>
    </Card>
  )
}

export default PassengerDetailsForm
