import * as React from "react"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "components/ui/card"

import { format } from "date-fns"
import { Calendar } from "components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "components/ui/popover"

const TripDetailsCard = () => {
  const [boardingdate, setBoardingDate] = React.useState<Date>()
  const [dropingDate, setDropingDate] = React.useState<Date>()

  return (
    <Card className="mt-5">
      <CardHeader className="items-start p-4 pb-2">
        <CardTitle className="text-xl">Trip Details</CardTitle>
      </CardHeader>
      <CardContent className="w-full px-4 pb-0">
        <div className="w-full inline-flex flex-row justify-between items-center">
          <div className="inline-flex flex-col items-start">
            <h4 className="font-normal text-slate-500">Bus Type</h4>
            <h3 className="text-lg font-semibold">Ac Sleeper (2 + 1)</h3>
          </div>
          <div className="inline-flex flex-col items-end">
            <h4 className="font-normal text-slate-500">Seat No</h4>
            <h3 className="text-lg font-semibold">DU4,DU3</h3>
          </div>
        </div>
        <div className="border-dotted border-b-2 border-slate-200 my-2" />
      </CardContent>
      <CardFooter className="w-full inline-flex flex-row justify-between items-center px-4 pb-4">
        <div className="inline-flex flex-col items-start">
          <h4 className="font-medium">Boarding</h4>
          <Popover>
            <PopoverTrigger asChild>
              <h4 className="font-normal">
                {boardingdate ? (
                  format(boardingdate, "PPP")
                ) : (
                  <span>20 Mar 2024, 21:50</span>
                )}
              </h4>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={boardingdate}
                onSelect={setBoardingDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="inline-flex flex-col items-end">
          <h4 className="font-medium">Droping</h4>
          <Popover>
            <PopoverTrigger asChild>
              <h4 className="font-normal">
                {dropingDate ? (
                  format(dropingDate, "PPP")
                ) : (
                  <span>20 Mar 2024, 21:50</span>
                )}
              </h4>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={dropingDate}
                onSelect={setDropingDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </CardFooter>
    </Card>
  )
}

export default TripDetailsCard
