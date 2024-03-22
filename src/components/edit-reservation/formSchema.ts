import { z } from "zod"

const FormSchema = z.object({
  name: z.string({
    required_error: "Name is required"
  }).min(1, "Name is required"),
  seat_number: z.string({
    required_error: "Seat Number is required",
  }).min(1, "Seat Number is required"),
  email: z.string({
    required_error: "Email is required",
  }).email().min(1, "Email is required"),
  date_of_booking: z.date({
    required_error: "A date is required",
  }).default(new Date()),
})

export default FormSchema