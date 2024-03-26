import { Icons } from "components/__Shared/Icons"
import { Button } from "components/ui/Button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "components/ui/Table"
import { useSelector } from "react-redux"
import { RemoveBookedPassanger } from "store/actions"
import { store as Store } from "store"
import DeleteDialog from "components/__Shared/DeleteDialog"
import EditPassanger from "./EditPassanger"
import { Passanger } from "store/types"

const PassangerList = () => {
  const { passangers } = useSelector((state: any) => state.BookedPassangers)
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="p-0 uppercase text-xs md:text-sm">
            Name
          </TableHead>
          <TableHead className="p-0 uppercase hidden md:table-cell text-xs md:text-sm">
            Email
          </TableHead>
          <TableHead className="p-0 uppercase text-xs md:text-sm">
            Seat
          </TableHead>
          <TableHead className="p-0 uppercase text-xs md:text-sm">
            Booking Date
          </TableHead>
          <TableHead className="p-0 uppercase text-xs md:text-sm">
            Actions
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {passangers.map((passanger: Passanger, index: number) => {
          return (
            <TableRow key={index}>
              <TableCell className="px-0 py-2 text-left font-semibold">
                {passanger.name}
              </TableCell>
              <TableCell className="px-0 py-2 text-left hidden md:table-cell">
                {passanger.email}
              </TableCell>
              <TableCell className="px-0  py-2 text-left">
                {passanger.seat}
              </TableCell>
              <TableCell className="px-0 py-2 text-left">
                {passanger.dateOfBooking}
              </TableCell>
              <TableCell className="px-0 py-2 text-left flex gap-x-2">
                <EditPassanger data={passanger}>
                  <Button
                    variant="outline"
                    className="p-0 m-0 h-7 w-7"
                    size="sm"
                  >
                    <Icons.Edit className="h-4 w-4" />
                  </Button>
                </EditPassanger>
                <DeleteDialog
                  onConfirm={() =>
                    Store.dispatch(RemoveBookedPassanger(passanger))
                  }
                >
                  <Button
                    variant="outline"
                    className="p-0 m-0 h-7 w-7"
                    size="sm"
                  >
                    <Icons.Delete className="h-4 w-4" />
                  </Button>
                </DeleteDialog>
              </TableCell>
            </TableRow>
          )
        })}
        {passangers.length === 0 && (
          <TableRow>
            <TableCell colSpan={5} className="px-0 py-2 text-center">
              No booking found
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}

export default PassangerList
