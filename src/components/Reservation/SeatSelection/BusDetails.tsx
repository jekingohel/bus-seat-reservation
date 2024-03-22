import { CardHeader } from "components/ui/Card"

const BusDetails = () => {
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
          <h3 className="text-md font-semibold">20 Mar 22:05</h3>
          <span className="font-normal text-sm text-muted-foreground text-center">
            Bangalore
          </span>
        </div>
        <div className="inline-flex flex-col items-end">
          <h3 className="text-md font-semibold">21 Mar 22:05</h3>
          <span className="font-normal text-sm text-muted-foreground">
            Chennai
          </span>
        </div>
      </div>
    </CardHeader>
  )
}

export default BusDetails
