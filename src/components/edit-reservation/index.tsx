import React from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "components/ui/Dialog"
import EditReservationForm from "./form"

interface DeleteDialogProps {
  children: React.ReactNode
  data: any
}

const EditReservation = ({ children, data }: DeleteDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle className="text-left">Edit Reservation</DialogTitle>
          <DialogDescription>Edit Details of Reservation</DialogDescription>
        </DialogHeader>
        <div>
          <EditReservationForm data={data} />
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default EditReservation
