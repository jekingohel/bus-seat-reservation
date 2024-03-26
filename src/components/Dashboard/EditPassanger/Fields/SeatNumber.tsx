import { FormField, FormItem, FormLabel, FormMessage } from "components/ui/Form"
import { Input } from "components/ui/Input"
import { Control } from "react-hook-form"
import { FormDataType } from "../FormTypes"

interface SeatNumberProps {
  control: Control<FormDataType>
}

const SeatNumber: React.FC<SeatNumberProps> = ({ control }) => {
  return (
    <FormField
      control={control}
      name="seat"
      render={({ field }) => (
        <FormItem className="flex flex-col w-full">
          <FormLabel>Seat Number</FormLabel>
          <div className="relative">
            <Input
              disabled={true}
              placeholder="Enter Seat Number"
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

export default SeatNumber
