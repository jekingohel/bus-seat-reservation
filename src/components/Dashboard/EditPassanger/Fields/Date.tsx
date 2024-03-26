import { Button } from "components/ui/Button"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "components/ui/Form"
import { Popover, PopoverContent, PopoverTrigger } from "components/ui/Popover"
import { cn } from "lib/utils"
import { Control } from "react-hook-form"
import { format } from "date-fns"
import { Calendar } from "components/ui/Calendar"
import { FormDataType } from "../FormTypes"
import React from "react"
import { Icons } from "components/__Shared/Icons"

interface DateProps {
  control: Control<FormDataType>
}

const Date: React.FC<DateProps> = ({ control }) => {
  return (
    <FormField
      control={control}
      name="dateOfBooking"
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>Date of Booking</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant={"outline"}
                  className={cn(
                    "h-8 pl-3 text-left font-normal pl-3 pr-2",
                    !field.value && "text-muted-foreground"
                  )}
                  disabled={true}
                >
                  {field.value
                    ? format(field.value, "PPP")
                    : format(new window.Date(), "PPP")}
                  <Icons.Calendar className="ml-auto w-4" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                disabled={(date) =>
                  date > new window.Date() ||
                  date < new window.Date("1900-01-01")
                }
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
export default Date
