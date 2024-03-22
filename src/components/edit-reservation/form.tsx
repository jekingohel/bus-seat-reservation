"use client"
import { zodResolver } from "@hookform/resolvers/zod"

import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "../ui/button"

import { Form } from "../ui/form"

import FormSchema from "./formSchema"
import { Name, SeatNumber, Email, DateOfBooking } from "./fields"

const EditReservationForm = ({ data }: any) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    defaultValues: {...data, date_of_booking: new Date(data?.date_of_booking)},
    resolver: zodResolver(FormSchema),
  })
  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <Name control={form.control} />
        <Email control={form.control} />
        <SeatNumber control={form.control} />
        <DateOfBooking control={form.control} />
        <Button type="submit" className="w-full">
          Edit Details
        </Button>
      </form>
    </Form>
  )
}

export default EditReservationForm
