import React, { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "components/ui/Dialog"
import EditPassangerForm from "./Form"
import { Passenger } from "store/types"

interface EditPassangerProps {
  children: React.ReactNode
  data: Passenger
}

const EditPassanger = ({ children, data }: EditPassangerProps) => {
  const [open, setOpen] = useState(false)
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle className="text-left">Edit Passanger</DialogTitle>
          <DialogDescription>
            Edit Details of Passanger (Name & Email)
          </DialogDescription>
        </DialogHeader>
        <div>
          <EditPassangerForm onClose={() => setOpen(false)} data={data} />
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default EditPassanger
