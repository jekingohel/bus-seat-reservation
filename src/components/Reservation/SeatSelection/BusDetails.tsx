import { CardHeader } from "components/ui/Card"
import { useSelector } from "react-redux"
import { format } from "date-fns"

const BusDetails = () => {
  const { boardingDate, dropingDate } = useSelector(
    (state: any) => state.CurrentReservation
  )
  return (
    <CardHeader className="items-start p-4 pb-2">
      <div className="w-full inline-flex flex-row justify-between items-start">
        <div className="inline-flex flex-col items-start">
          <h3 className="text-md font-semibold">Yolo Bus</h3>
          <span className="font-normal text-sm text-muted-foreground">
            Ac Sleeper (2 + 1)
          </span>
        </div>
        <div className="inline-flex flex-col items-center">
          <h3 className="text-md font-semibold">
            {boardingDate ? (
              `${format(boardingDate, "dd MMM")} 21:50`
            ) : (
              <span>20 Mar 2024, 21:50</span>
            )}
          </h3>
          <span className="font-normal text-sm text-muted-foreground text-center">
            Bangalore
          </span>
        </div>
        <div className="inline-flex flex-col items-end">
          <h3 className="text-md font-semibold">
            {dropingDate ? (
              `${format(dropingDate, "dd MMM")} 21:50`
            ) : (
              <span>20 Mar 2024, 21:50</span>
            )}
          </h3>
          <span className="font-normal text-sm text-muted-foreground">
            Chennai
          </span>
        </div>
      </div>
    </CardHeader>
  )
}

export default BusDetails
