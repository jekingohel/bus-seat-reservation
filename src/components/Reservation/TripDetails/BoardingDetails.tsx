import { Calendar } from "components/ui/Calendar"
import { CardFooter } from "components/ui/Card"
import { Popover, PopoverContent, PopoverTrigger } from "components/ui/Popover"
import React from "react"
import { format, addDays } from "date-fns"
import { store as Store } from "store"
import { SetCurrentReservationDate } from "store/actions"

const BoardingDetails = () => {
  const reservationDate = Store.getState().CurrentReservation.boardingDate
  const reservationDropingDate = Store.getState().CurrentReservation.dropingDate
  const [boardingDate, setBoardingDate] = React.useState<Date>(
    reservationDate && new Date(reservationDate)
  )
  const [dropingDate, setDropingDate] = React.useState<Date>(
    reservationDate && new Date(reservationDropingDate)
  )
  const handleOnSelectBoardingDate = (selectedDate?: Date) => {
    if (selectedDate) {
      const dropingDate = addDays(new Date(selectedDate), 1)
      setDropingDate(dropingDate)
      setBoardingDate(selectedDate)
      Store.dispatch(
        SetCurrentReservationDate(`${format(selectedDate, "y-MM-dd")} 21:50`)
      )
    }
  }
  return (
    <CardFooter className="w-full inline-flex flex-row justify-between items-center px-4 pb-4">
      <div className="inline-flex flex-col items-start">
        <label className="font-normal text-sm text-muted-foreground">
          Select Boarding Date
        </label>
        <Popover>
          <PopoverTrigger asChild>
            <h4 className="text-md font-semibold underline cursor-pointer">
              {boardingDate ? (
                `${format(boardingDate, "dd MMMM, y")} 21:50`
              ) : (
                <span>20 Mar 2024, 21:50</span>
              )}
            </h4>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={boardingDate}
              onSelect={handleOnSelectBoardingDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
      <div className="inline-flex flex-col items-end">
        <label className="font-normal text-sm text-muted-foreground">
          Droping
        </label>
        <h3 className="text-md font-semibold">
          {dropingDate ? (
            `${format(dropingDate, "dd MMMM, y")} 21:50`
          ) : (
            <span>21 Mar 2024, 21:50</span>
          )}
        </h3>
      </div>
    </CardFooter>
  )
}

export default BoardingDetails
