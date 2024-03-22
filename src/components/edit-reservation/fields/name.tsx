import { FormField, FormItem, FormLabel, FormMessage } from "components/ui/Form"
import { Input } from "components/ui/Input"
import { Control } from "react-hook-form"
import { FormDataType } from "../formTypes"

interface NameProps {
  control: Control<FormDataType>
}

const Name: React.FC<NameProps> = ({ control }) => {
  return (
    <FormField
      control={control}
      name="name"
      render={({ field }) => (
        <FormItem className="flex flex-col w-full">
          <FormLabel>Name</FormLabel>
          <div className="relative">
            <Input
              placeholder="Enter Name"
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

export default Name
