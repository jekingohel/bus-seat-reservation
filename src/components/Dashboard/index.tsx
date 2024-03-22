import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "components/ui/Table"
import bookings from "./data"
import { Button } from "components/ui/Button"
import { Pencil, Trash2 } from "lucide-react"
import DeleteDialog from "../__Shared/DeleteDialog"
import EditReservation from "../edit-reservation"

const Dashboard = () => {
  return (
    <div className="container flex flex-col max-w-screen-md items-start">
      <div className="flex flex-col items-start my-8 gap-y-2">
        <h1 className="text-4xl text-left font-bold">Passenger Reservation</h1>
        <p className="text-left text-zinc-500">
          View and manage all passenger reservations
        </p>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="p-0">Name</TableHead>
            <TableHead className="p-0">Email</TableHead>
            <TableHead className="p-0">Seat Number</TableHead>
            <TableHead className="p-0">Date of booking</TableHead>
            <TableHead className="p-0">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookings.map((x, index) => {
            return (
              <TableRow key={index}>
                <TableCell className="px-0 py-2 text-left">{x.name}</TableCell>
                <TableCell className="px-0 py-2 text-left">{x.email}</TableCell>
                <TableCell className="px-0  py-2 text-left">
                  {x.seat_number}
                </TableCell>
                <TableCell className="px-0 py-2 text-left">
                  {x.date_of_booking}
                </TableCell>
                <TableCell className="px-0 py-2 text-left flex gap-x-2">
                  <EditReservation data={x}>
                    <Button
                      variant="outline"
                      className="p-0 m-0 h-7 w-7"
                      size="sm"
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                  </EditReservation>
                  <DeleteDialog>
                    <Button
                      variant="outline"
                      className="p-0 m-0 h-7 w-7"
                      size="sm"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </DeleteDialog>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}

export default Dashboard
