import { store as Store } from "store"
const SeatAvailabilityInfo = () => {
  const booked_seats = Store.getState().BookedPassangers.passangers
  const available_seats = 40 - booked_seats.length
  return (
    <div className="w-full inline-flex flex-row justify-between items-center">
      <div className="inline-flex flex-col items-start">
        <h3 className="text-md font-semibold">
          {`${available_seats} seats available`}
        </h3>
        <h4 className="font-normal text-sm text-muted-foreground">
          Click on seat to select/deselet
        </h4>
      </div>
      <div className="inline-flex flex-row items-start">
        <div className="inline-flex flex-col items-center w-12 mx-3">
          <div className="h-5 w-5 rounded-md bg-white border border-slate-300" />
          <span className="font-normal text-xs text-center text-muted-foreground">
            Available
          </span>
        </div>
        <div className="inline-flex flex-col items-center w-12 mx-3">
          <div className="h-5 w-5 rounded-md bg-zinc-200 border border-slate-300" />
          <span className="font-normal text-xs text-center text-muted-foreground">
            Booked
          </span>
        </div>
        <div className="inline-flex flex-col items-center w-12 mx-3">
          <div className="h-5 w-5 rounded-md bg-green-100 border border-green-600" />
          <span className="font-normal text-xs text-center text-muted-foreground">
            Selected
          </span>
        </div>
      </div>
    </div>
  )
}
export default SeatAvailabilityInfo
