import { Input } from "components/ui/Input"
import { Control } from "react-hook-form"
import { FormDataType } from "../formTypes"
import { FormField, FormItem, FormMessage } from "components/ui/Form"
import React from "react"

interface EmailProps {
  control: Control<FormDataType>
  defaultValue?: string
  row: number
}

const Email: React.FC<EmailProps> = ({ control, row, defaultValue }) => {
  const [value, setValue] = React.useState(defaultValue || "")
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  return (
    <FormField
      control={control}
      name={`passangers.${row}.email`}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <div className="relative">
            <Input
              placeholder="Email"
              className="pr-8 h-8"
              defaultValue={value}
              onChange={handleChange}
            />
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default Email
