import { Icons } from "components/__Shared/Icons"
import { Card, CardContent } from "components/ui/Card"

const LowerSeats = () => {
  const renderSeats = () => {
    const col1 = Array.from({ length: 10 }, (_, i) => <Icons.seat key={i} />)
    const col2 = Array.from({ length: 10 }, (_, i) => <Icons.seat key={i} />)
    const col3 = Array.from({ length: 10 }, (_, i) => <Icons.seat key={i} />)
    const col4 = Array.from({ length: 10 }, (_, i) => <Icons.seat key={i} />)
    return (
      <div className="inline-flex space-y-8 flex-col items-start">
        <div className="inline-flex space-y-2 flex-col items-start">
          <div className="inline-flex flex-row space-x-2">{col1}</div>
          <div className="inline-flex flex-row space-x-2">{col2}</div>
        </div>
        <div className="inline-flex space-y-2 flex-col items-start">
          <div className="inline-flex flex-row space-x-2">{col3}</div>
          <div className="inline-flex flex-row space-x-2">{col4}</div>
        </div>
      </div>
    )
  }

  return (
    <Card className="mt-5">
      <CardContent className="p-6">{renderSeats()}</CardContent>
    </Card>
  )
}

export default LowerSeats
