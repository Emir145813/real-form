"use client"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "@/components/ui/field"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import profileSchema from "@/lib/validation/profileSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Check, ChevronDownIcon, ChevronsUpDown } from "lucide-react"
import React from "react"
import { useForm } from "react-hook-form"
import z from "zod"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { cn } from "@/lib/utils"


function page() {

  //Calendar Prefix UseStates
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState<Date | undefined>(undefined)
  //Country Prefix UseStates
  const [prefixOpen, setPrefixOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  const form = useForm(
    {
      resolver : zodResolver(profileSchema),
      defaultValues:{
        name : '',
        lastname : '',
        prefix : '',
        number : '',
        idcardnumber: '',
        birthdate : '',
        province : '',
        city : '',
        fulladdress : '',
        postalcode: '',
        zipcode : 0
      }
    }
  )

  const prefixes = [
  {
    value: "90",
    label: "+90",
  },
  {
    value: "91",
    label: "+91",
  },
  {
    value: "92",
    label: "+92",
  },
  {
    value: "93",
    label: "+93",
  },
  {
    value: "94",
    label: "+94",
  },
  {
    value: "95",
    label: "+95",
  },
  {
    value: "96",
    label: "+96",
  },
  {
    value: "97",
    label: "+97",
  },
  {
    value: "98",
    label: "+98",
  },
  {
    value: "99",
    label: "+99",
  },
]

  function onSubmit(values: z.infer<typeof profileSchema>) {
    console.log(values)
  }
  return (
    <div className="w-full h-screen flex items-center justify-center" >
      <div className="w-full max-w-md bg-gray-50 p-10 rounded-2xl space-y-5">
        <h1 className="font-bold text-2xl">
          Update Profile
        </h1>
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 flex flex-col">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input className="bg-white" placeholder="Emir" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input className="bg-white" placeholder="Padban" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex gap-2">
                <FormField
                  control={form.control}
                  name="prefix"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Number Prefix</FormLabel>
                      <Field {...field} className="w-[180px]">
                        <FormControl >
                          <Popover open={prefixOpen} onOpenChange={setPrefixOpen}>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                role="combobox"
                                aria-expanded={prefixOpen}
                                className="w-[200px] justify-between"
                              >
                                {value
                                  ? prefixes.find((prefixes) => prefixes.value === value)?.label
                                  : "Country"}
                                <ChevronsUpDown className="opacity-50" />
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-[200px] p-0">
                              <Command>
                                <CommandInput placeholder="Search framework..." className="h-9" />
                                <CommandList>
                                  <CommandEmpty>Code Not found.</CommandEmpty>
                                  <CommandGroup>
                                    {prefixes.map((prefixes) => (
                                      <CommandItem
                                        key={prefixes.value}
                                        value={prefixes.value}
                                        onSelect={(currentValue) => {
                                          setValue(currentValue === value ? "" : currentValue)
                                          setPrefixOpen(false)
                                          field.onChange(currentValue);
                                        }}
                                      >
                                        {prefixes.label}
                                        <Check
                                          className={cn(
                                            "ml-auto",
                                            value === prefixes.value ? "opacity-100" : "opacity-0"
                                          )}
                                        />
                                      </CommandItem>
                                    ))}
                                  </CommandGroup>
                                </CommandList>
                              </Command>
                            </PopoverContent>
                          </Popover>
                        </FormControl>
                      </Field>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="number"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input className=" bg-white" placeholder="999919444" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="idcardnumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Personal Id</FormLabel>
                    <FormControl>
                      <Input className="bg-white" placeholder="1451661662" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="birthdate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Birth Date</FormLabel>
                    <FormControl>
                      <div className="flex flex-col gap-3">
                        <Popover open={open} onOpenChange={setOpen}>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              id="date"
                              className="w-full justify-between font-normal"
                            >
                              {date ? date.toLocaleDateString() : "Select date"}
                              <ChevronDownIcon />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="max-w-md overflow-hidden p-0" align="start">
                            <Calendar
                              {...field}
                              mode="single"
                              selected={date}
                              captionLayout="dropdown"
                              onSelect={(newDate) => {
                                setDate(newDate);
                                field.onChange(newDate); // ⭐ IMPORTANT
                                setOpen(false);
                              }}
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <FieldSet>
                    <FieldLegend>
                      Address Information
                    </FieldLegend>
                    <FieldDescription>
                      We need your address to deliver your order.
                    </FieldDescription>
                    <FieldGroup>
                      <div className="flex gap-3">
                        <Field>
                          <FormField
                            control={form.control}
                            name="province"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Provice</FormLabel>
                                <FormControl>
                                  <Input className="bg-white" id="province" type="text" placeholder="Province" {...field}/>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </Field>
                        <Field>
                          <FormField
                            control={form.control}
                            name="city"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>City</FormLabel>
                                <FormControl>
                                  <Input className="bg-white" id="city" type="text" placeholder="City" {...field}/>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </Field>
                      </div>
                      <Field>
                        <FormField
                            control={form.control}
                            name="fulladdress"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Full Address</FormLabel>
                                <FormControl>
                                  <Input className="bg-white" id="fulladdress" type="text" placeholder="Address" {...field}/>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                      </Field>
                      <div className="flex gap-3">
                        <Field>
                          <FormField
                            control={form.control}
                            name="postalcode"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Postal Code</FormLabel>
                                <FormControl>
                                  <Input className="bg-white" id="postalcode" type="text" placeholder="5611687" {...field}/>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </Field>
                        <Field>
                          <FormField
                            control={form.control}
                            name="zipcode"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Zip Code</FormLabel>
                                <FormControl>
                                  <Input type="number" className="bg-white" id="zipcode" placeholder="116" {...field}/>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </Field>
                      </div>
                    </FieldGroup>
                  </FieldSet>
                </FormControl>
                <FormMessage />
              </FormItem>
              <Button>
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default page