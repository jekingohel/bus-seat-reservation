import { useFieldArray, useForm } from "react-hook-form"
import { Form } from "components/ui/Form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import FormSchema from "./formSchema"
import Name from "./Fields/Name"
import Email from "./Fields/Email"
import { Label } from "components/ui/Label"

const PassengerForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: "all",
  })

  const {
    fields,
    //append, prepend, remove, swap, move, insert
  } = useFieldArray({
    control: form.control, // control props comes from useForm (optional: if you are using FormContext)
    name: "passangers", // unique name for your Field Array
  })

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {fields.map((field, index) => (
          <div
            key={index}
            className={`inline-flex flex-col ${index > 0 && "mt-4"}`}
          >
            <div className="inline-flex flex-row items-center space-x-1">
              <Label>Add Passenger for</Label>
              <span className="text-sm font-normal text-primary">DU3</span>
            </div>
            <div className="inline-flex flex-row items-start space-x-3 mt-2">
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
        {/* <button
          onClick={() =>
            append({ name: "Jekin Gohel", email: "jekin1991@gmail.com" })
          }
        >
          Add Element
        </button> */}
      </form>
    </Form>
  )
}

export default PassengerForm
