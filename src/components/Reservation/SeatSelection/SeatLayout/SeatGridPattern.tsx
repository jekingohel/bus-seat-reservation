import { Icons } from "components/__Shared/Icons"
import { useSelectedSeats } from "./SelectedSeatsContext"

interface SeatGridPatternProps {
  numberOfSeats: number
  type?: "seating" | "sleeper"
  title: string
  bookedSeats: string[]
}

const SeatGridPattern: React.FC<SeatGridPatternProps> = ({
  numberOfSeats,
  type = "sleeper",
  title,
  bookedSeats = [],
}) => {
  const { selectedSeats, setSelectedSeats } = useSelectedSeats()

  const values = Array.from({ length: numberOfSeats }, (_, index) => index + 1)

  const rows = []
  for (let i = 0; i < values.length; i += 5) {
    rows.push(values.slice(i, i + 5))
  }

  const groupedRows = []
  for (let i = 0; i < rows.length; i += 2) {
    groupedRows.push(rows.slice(i, i + 2))
  }

  const handleSeatSelection = (seat: string) => {
    setSelectedSeats((prevSelectedSeats) => {
      const currentSelectedSeats = prevSelectedSeats || []
      if (currentSelectedSeats.includes(seat)) {
        // Remove the seat if it's already selected
        return currentSelectedSeats.filter(
          (selectedSeat) => selectedSeat !== seat
        )
      } else {
        // Add the seat if it's not already selected
        return [...currentSelectedSeats, seat]
      }
    })
  }

  return (
    <div className="inline-flex items-center overflow-y-auto">
      <div className="-rotate-90 h-8 w-full text-muted-foreground text-sm">
        {title}
      </div>
      <div className="flex items-start h-full px-5">
        <Icons.Steering className="-rotate-90 w-10 h-10 text-muted-foreground" />
      </div>
      <div className="inline-flex flex-col space-y-8">
        {groupedRows.map((group, groupIndex) => (
          <div key={groupIndex} className="inline-flex flex-col space-y-2">
            {group.map((row, rowIndex) => (
              <div key={rowIndex} className="inline-flex space-x-5">
                {row.map((value, index) => {
                  let seatNumber = `${title.substring(0, 1)}${value}`
                  let color = ""
                  if (bookedSeats.includes(seatNumber)) {
                    color = "booked"
                  } else if (selectedSeats?.includes(seatNumber)) {
                    color = "selected"
                  }
                  return type === "sleeper" ? (
                    <div
                      key={index}
                      className={`relative ${
                        color !== "booked" ? "cursor-pointer" : ""
                      }`}
                      onClick={
                        color !== "booked"
                          ? () => handleSeatSelection(seatNumber)
                          : undefined
                      }
                    >
                      <Icons.Sleaper color={color} />
                      <span className="w-full absolute top-2 flex items-center justify-center text-xs text-muted-foreground">
                        {seatNumber}
                      </span>
                    </div>
                  ) : (
                    <Icons.Seat key={index} />
                  )
                })}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
export default SeatGridPattern
