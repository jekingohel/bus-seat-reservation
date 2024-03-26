import { Card, CardContent } from "components/ui/Card"
import SeatGridPattern from "./SeatGridPattern"

interface UpperSeatsProps {
  bookedSeats: string[]
}
const UpperSeats: React.FC<UpperSeatsProps> = ({ bookedSeats }) => {
  return (
    <Card className="mt-5">
      <CardContent className="p-6 justify-center flex">
        <SeatGridPattern
          bookedSeats={bookedSeats}
          title="Upper Deck"
          numberOfSeats={20}
        />
      </CardContent>
    </Card>
  )
}

export default UpperSeats
