import { FormField, FormItem, FormLabel, FormMessage } from "components/ui/Form"
import { Input } from "components/ui/Input"
import { Control } from "react-hook-form"
import { FormDataType } from "../formTypes"

interface EmailProps {
  control: Control<FormDataType>
}

const Email: React.FC<EmailProps> = ({ control }) => {
  return (
    <FormField
      control={control}
      name="email"
      render={({ field }) => (
        <FormItem className="flex flex-col w-full">
          <FormLabel>Email</FormLabel>
          <div className="relative">
            <Input
              placeholder="Enter Email"
              className="pr-8 h-8"
              defaultValue={field.value || ""}
              onChange={(e) => field.onChange(e.target.value)}
            />
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default Email
