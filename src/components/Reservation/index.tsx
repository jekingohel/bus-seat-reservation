import { Button } from "components/ui/button"
import { Card, CardContent, CardHeader } from "components/ui/card"
import TripDetailsCard from "./__shared/trip-details-card"
import PassengerDetailsForm from "./__shared/Passenger-details-form"

const Reservation = () => {
  return (
    <div className="container max-w-screen-md items-center">
      <TripDetailsCard />
      <Card className="mt-5">
        <CardHeader className="items-start p-4 pb-2">
          <div className="w-full inline-flex flex-row justify-between items-start">
            <div className="inline-flex flex-col items-start">
              <h3 className="text-lg font-semibold">Yolo Bus</h3>
              <h4 className="font-normal text-slate-500">Ac Sleeper (2 + 1)</h4>
            </div>
            <div className="inline-flex flex-col items-start">
              <h3 className="font-normal text-slate-500">20 Mar</h3>
              <h4 className="text-lg font-bold">22:05</h4>
              <h4 className="font-normal text-slate-500">Bangalore</h4>
            </div>
            <div className="inline-flex flex-col items-start">
              <h3 className="font-normal text-slate-500">21 Mar</h3>
              <h4 className="text-lg font-bold">07:04</h4>
              <h4 className="font-normal text-slate-500">Chennai</h4>
            </div>
          </div>
        </CardHeader>
        <div className="border-solid border-b-2 border-slate-200 my-2" />
        <CardContent className="w-full p-3">
          <div className="bg-zinc-200 rounded-md p-3">
            <div className="w-full inline-flex flex-row justify-between items-center">
              <div className="inline-flex flex-col items-start">
                <h3 className="text-lg font-semibold">15 Seats Available</h3>
                <h4 className="font-normal text-slate-500">
                  Click on seat to select/deselet
                </h4>
              </div>
              <div className="inline-flex flex-row items-start">
                <div className="inline-flex flex-col items-center w-12 mx-3">
                  <div className="h-7 w-7 rounded-md bg-white border border-slate-300" />
                  <span className="font-normal text-sm">Available Seats</span>
                </div>
                <div className="inline-flex flex-col items-center w-12 mx-3">
                  <div className="h-7 w-7 rounded-md bg-zinc-200 border border-slate-300" />
                  <span className="font-normal text-sm">Booked Seats</span>
                </div>
                <div className="inline-flex flex-col items-center w-12 mx-3">
                  <div className="h-7 w-7 rounded-md bg-green-100 border border-green-600" />
                  <span className="font-normal text-sm">Selected Seats</span>
                </div>
              </div>
            </div>
            <Card className="mt-5">
              <h4 className="font-normal">Upper</h4>
            </Card>
            <Card className="mt-5">
              <h4 className="font-normal">Lower</h4>
            </Card>
          </div>
        </CardContent>
      </Card>
      <PassengerDetailsForm />

      <Button className="my-5 w-full" onClick={() => console.log("call")}>
        Continue to Pay $155 {">>"}{" "}
      </Button>
    </div>
  )
}

export default Reservation
