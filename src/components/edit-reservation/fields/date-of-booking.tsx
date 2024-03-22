import { Button } from "../../ui/button"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../ui/form"
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover"
import { cn } from "../../../lib/utils"
import { Control } from "react-hook-form"
import { format } from "date-fns"
import { Calendar } from "../../ui/calendar"
import { FormDataType } from "../formTypes"
import React from "react"
import { CalendarIcon } from "lucide-react"

interface DateProps {
  control: Control<FormDataType>
}

const Date: React.FC<DateProps> = ({ control }) => {
  return (
    <FormField
      control={control}
      name="date_of_booking"
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
                  <CalendarIcon className="ml-auto w-4" />
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
