import { Calendar } from "components/ui/Calendar"
import { CardFooter } from "components/ui/Card"
import { Popover, PopoverContent, PopoverTrigger } from "components/ui/Popover"
import React from "react"
import { format } from "date-fns"

const BoardingDetails = () => {
  const [boardingdate, setBoardingDate] = React.useState<Date>()
  const [dropingDate, setDropingDate] = React.useState<Date>()
  return (
    <CardFooter className="w-full inline-flex flex-row justify-between items-center px-4 pb-4">
      <div className="inline-flex flex-col items-start">
        <label className="font-normal text-sm text-muted-foreground">
          Select Boarding Date
        </label>
        <Popover>
          <PopoverTrigger asChild>
            <h4 className="text-md font-semibold underline cursor-pointer">
              {boardingdate ? (
                `${format(boardingdate, "dd MMMM, Y")} 21:50`
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
        <label className="font-normal text-sm text-muted-foreground">
          Droping
        </label>
        <h3 className="text-md font-semibold">20 Mar 2024, 21:50</h3>
      </div>
    </CardFooter>
  )
}

export default BoardingDetails
