import { Card, CardContent } from "components/ui/Card"
import SeatGridPattern from "./SeatGridPattern"

interface LowerSeatsProps {
  bookedSeats: string[]
}
const LowerSeats: React.FC<LowerSeatsProps> = ({ bookedSeats }) => {
  return (
    <Card className="mt-5">
      <CardContent className="p-6 justify-center flex">
        <SeatGridPattern
          bookedSeats={bookedSeats}
          title="Lower Deck"
          numberOfSeats={20}
        />
      </CardContent>
    </Card>
  )
}

export default LowerSeats
