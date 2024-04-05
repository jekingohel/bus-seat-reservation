import { useFieldArray, useForm } from "react-hook-form"
import { Form } from "components/ui/Form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import FormSchema from "./FormSchema"
import Name from "./Fields/Name"
import Email from "./Fields/Email"
import { Label } from "components/ui/Label"
import { useSelector } from "react-redux"
import { useEffect, useMemo } from "react"
import { Button } from "components/ui/Button"
import { store as Store } from "store"
import {
  ResetCurrentReservationPassangers,
  SetBookedPassangers,
} from "store/actions"

import { useNavigate } from "react-router-dom"
import { useToast } from "components/ui/useToast"

const PassengerForm = () => {
  const { toast } = useToast()
  const navigate = useNavigate()
  const { passangers } = useSelector((state: any) => state.CurrentReservation)
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: "all",
    defaultValues: useMemo(() => {
      return { passangers: passangers || [] }
    }, [passangers]),
  })

  const { fields, replace } = useFieldArray({
    control: form.control,
    name: "passangers",
  })

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    Store.dispatch(SetBookedPassangers(data.passangers))
    Store.dispatch(ResetCurrentReservationPassangers())
    toast({
      description: "Passangers added successfully!",
    })
    navigate("/", { replace: true })
  }

  useEffect(() => {
    replace(passangers || [])
  }, [passangers, replace])

  return (
    <Form {...form}>
      <form className="w-full" onSubmit={form.handleSubmit(onSubmit)}>
        {fields.map((field, index) => (
          <div
            key={index}
            className={`inline-flex w-full flex-col ${index > 0 && "mt-4"}`}
          >
            <div className="inline-flex flex-row items-center space-x-1">
              <Label>Add Passenger for</Label>
              <span className="text-sm font-normal text-primary">
                {field.seat}
              </span>
            </div>
            <div className="inline-flex flex-row items-start space-x-3 mt-2 w-full">
              <Name
                control={form.control}
                defaultValue={field.name}
                row={index}
              />
              <Email
                control={form.control}
                defaultValue={field.email}
                row={index}
              />
            </div>
          </div>
        ))}
        {passangers.length > 0 && (
          <Button type="submit" className="mt-5 w-full font-semibold text-md">
            Save Booking
          </Button>
        )}
        {passangers.length === 0 && (
          <p className="font-normal text-sm text-muted-foreground">
            Select seats to enter Passangers details
          </p>
        )}
      </form>
    </Form>
  )
}

export default PassengerForm
