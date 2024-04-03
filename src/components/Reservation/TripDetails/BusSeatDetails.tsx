import { CardContent } from "components/ui/Card"
import { useSelector } from "react-redux"
import { Passenger } from "store/types"

const BusDetails = () => {
  const { passangers } = useSelector((state: any) => state.CurrentReservation)
  const seats = passangers.map((p: Passenger) => p.seat)
  return (
    <CardContent className="w-full px-4 pb-0">
      <div className="w-full inline-flex flex-row justify-between items-center">
        <div className="inline-flex flex-col items-start">
          <label className="font-normal text-sm text-muted-foreground">
            Bus Type
          </label>
          <h3 className="text-md font-semibold">Ac Sleeper (2 + 1)</h3>
        </div>
        <div className="inline-flex flex-col items-end">
          <label className="font-normal text-sm text-muted-foreground">
            Seat No
          </label>
          <h3 className="text-md font-semibold">
            {seats.length > 0 ? seats.join(", ") : "-"}
          </h3>
        </div>
      </div>
      <div className="border-dotted border-b-2 border-slate-200 my-2" />
    </CardContent>
  )
}

export default BusDetails
