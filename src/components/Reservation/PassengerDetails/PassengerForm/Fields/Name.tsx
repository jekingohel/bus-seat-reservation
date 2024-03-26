import { Input } from "components/ui/Input"
import { Control } from "react-hook-form"
import { FormField, FormItem, FormMessage } from "components/ui/Form"
import React from "react"
import { Passengers } from "store/types"

interface NameProps {
  control: Control<Passengers>
  defaultValue?: string
  row: number
}

const Name: React.FC<NameProps> = ({ control, row, defaultValue }) => {
  const [value] = React.useState(defaultValue || "")

  return (
    <FormField
      control={control}
      name={`passangers.${row}.name`}
      render={({ field }) => (
        <FormItem className="w-full">
          <Input
            placeholder="Full name"
            className="pr-8 h-8"
            defaultValue={value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              field.onChange(e.target.value)
            }
          />
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default Name
