import { CardContent } from "components/ui/Card"

const BusDetails = () => {
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
          <h3 className="text-md font-semibold">DU4,DU3</h3>
        </div>
      </div>
      <div className="border-dotted border-b-2 border-slate-200 my-2" />
    </CardContent>
  )
}

export default BusDetails
