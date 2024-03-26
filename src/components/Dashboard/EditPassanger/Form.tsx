import { zodResolver } from "@hookform/resolvers/zod"

import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "components/ui/Button"

import FormSchema from "./FormSchema"
import { Name, SeatNumber, Email, DateOfBooking } from "./Fields"
import { Form } from "components/ui/Form"
import { UpdateBookedPassanger } from "store/actions"
import { store as Store } from "store"
import { format } from "date-fns"
import { useToast } from "components/ui/useToast"
import { Passanger } from "store/types"

interface EditPassangerFormProps {
  data: Passanger
  onClose: any
}

const EditPassangerForm: React.FC<EditPassangerFormProps> = ({
  data,
  onClose,
}) => {
  const { toast } = useToast()
  const form = useForm<z.infer<typeof FormSchema>>({
    defaultValues: {
      ...data,
      dateOfBooking: new Date(data?.dateOfBooking),
    },
    resolver: zodResolver(FormSchema),
  })
  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    let passanger: Passanger = {
      name: data.name,
      email: data.email,
      seat: data.seat,
      dateOfBooking: `${format(data.dateOfBooking, "y-MM-dd")} 21:50`,
    }
    Store.dispatch(UpdateBookedPassanger(passanger))
    onClose()
    toast({
      description: "Passanger updated successfully!",
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <Name control={form.control} />
        <Email control={form.control} />
        <SeatNumber control={form.control} />
        <DateOfBooking control={form.control} />
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </Form>
  )
}

export default EditPassangerForm
