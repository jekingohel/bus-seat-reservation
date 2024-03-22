import { z } from "zod"

const FormSchema = z.object({
  passangers: z.array(
    z.object({
      name: z.string(),
      email: z.string(),
    })
  ),
})

export default FormSchema
