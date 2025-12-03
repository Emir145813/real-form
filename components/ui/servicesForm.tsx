"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Field, FieldDescription, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from '@/components/ui/button'
import { useActionState } from 'react'
import { ActionData } from '@/lib/formtype'
import createTicket from '@/lib/actions/createticket'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { servicesSchema } from '@/lib/validation/servicesSchema'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import z from 'zod'


function ServicesForm() {

  const [state , formAction , pending] = useActionState<ActionData, FormData>(
    createTicket,
    {
      status : "",
      errors : [""]
    })
  const form = useForm<z.infer<typeof servicesSchema>>(
    {
      resolver : zodResolver(servicesSchema),
      defaultValues :{
        email : "",
        message : "",
        departments : "",
        date : ''
      }

    }
  )

  function onSubmit(values: z.infer<typeof servicesSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <div className='flex flex-col justify-center items-center h-screen space-y-5'>
      <h1 className='text-3xl font-semibold'>
        Service Center
      </h1>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>
            Service Center
          </CardTitle>
          <CardDescription>
            Submit Your Issue With Proper Document
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className='space-y-2'>
                    <Label htmlFor="email">Email</Label>
                    <FormControl>
                      <Input
                        id="email"
                        type="email"
                        placeholder="ccc@example.com"
                        required
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className='space-y-2'>
                    <Label htmlFor="message">Message</Label>
                    <FormControl>
                      <Textarea
                        id="message"
                        placeholder="Write Your Message Here"
                        required
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="departments"
                render={({ field }) => (
                  <FormItem className="w-full max-w-md">
                    <Field { ...field }>
                      <FieldLabel>
                        Departments
                      </FieldLabel>
                      <FormControl>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Department"/>
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value='technical'>
                              Technical
                            </SelectItem>
                            <SelectItem value='finance'>
                              Finance
                            </SelectItem>
                            <SelectItem value='sale'>
                              Sale
                            </SelectItem>
                            <SelectItem value='support'>
                              Customer Support
                            </SelectItem>
                          </SelectContent>
                          <FieldDescription>
                            Select Your Department
                          </FieldDescription>
                        </Select>
                      </FormControl>
                    </Field>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className='space-y-2'>
                    <Label htmlFor="date">Date</Label>
                    <FormControl>
                      <Input
                        id="date"
                        type='date'
                        placeholder="Write Your Message Here"
                        required
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              {/* <FormField
                control={form.control}
                name="document"
                render={({ field }) => (
                  <FormItem className='space-y-2'>
                    <Label htmlFor="picture">Picture</Label>
                    <Input
                      id="picture"
                      type="file"
                    />
                  </FormItem>
                )}
              /> */}
              
              <Button>
                Submit
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      {
        state.status
      }
    </div>
  )
}

export default ServicesForm