import { z } from "zod"

const FormSchema = z.object({
  passangers: z.array(
    z.object({
      name: z.string().trim().min(1, { message: "Required" }),
      email: z.string().email().trim().min(1, { message: "Required" }),
      seat: z.string(),
      dateOfBooking: z.string(),
    })
  ),
})

export default FormSchema
