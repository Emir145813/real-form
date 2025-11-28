"use client"
import { signupSchema } from '@/lib/validation/signupSchema'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useActionState } from 'react'
import { ActionData } from '@/lib/formtype'
import createUser from '@/lib/actions/createUser'


function SignUp() {

  const form = useForm<z.infer<typeof signupSchema>>({
    resolver : zodResolver(signupSchema),
    defaultValues : {
      name : "",
      lastname:"",
      username: "",
      email : "",
      password : "",
      confirmpassword : ""
    }
  })

  const [status , formAction ,pending] = useActionState<ActionData , FormData>(
    createUser,
    {
      status : "",
      errors : []
    })

  return (
    <div className='bg-linear-to-r from-violet-300 to-pink-300 h-[100vh] flex justify-center items-center'>
      <div className='bg-white/10 px-10 py-10 rounded-3xl border border-white/70 flex flex-col gap-10'>
        <h1 className='bg-linear-to-r from-violet-500 via-violet-600 to-pink-500 bg-clip-text text-transparent font-semibold text-4xl text-center'>
          Create Account
        </h1>
        <div>
          <Form {...form}>
            <form action={formAction} className="space-y-8">
              <div className='flex gap-2'>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-gray-600/70 '>First Name</FormLabel>
                      <FormControl>
                        <Input className='border rounded-3xl border-white/70 focus-visible:border-violet-500/50 focus-visible:ring-violet-500/10 py-5' placeholder="Enter Your Name" maxLength={10} {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-gray-600/70 '>Last Name</FormLabel>
                      <FormControl>
                        <Input className='border rounded-3xl border-white/70 focus-visible:border-violet-500/50 focus-visible:ring-violet-500/10 py-5' placeholder="Enter Your Name" maxLength={10} {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-gray-600/70 '>Username</FormLabel>
                    <FormControl>
                      <Input className='border rounded-3xl border-white/70 focus-visible:border-violet-500/50 focus-visible:ring-violet-500/10 py-5' placeholder="Enter Your Name" maxLength={10} {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-gray-600/70'>Email</FormLabel>
                    <FormControl>
                      <Input className='border rounded-3xl border-white/70 focus-visible:border-violet-500/50 focus-visible:ring-violet-500/10 py-5' placeholder="email" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-gray-600/70'>Password</FormLabel>
                    <FormControl>
                      <Input className='border rounded-3xl border-white/70 focus-visible:border-violet-500/50 focus-visible:ring-violet-500/10 py-5' placeholder="password" minLength={8} maxLength={16} {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmpassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-gray-600/70'>Password</FormLabel>
                    <FormControl>
                      <Input className='border rounded-3xl border-white/70 focus-visible:border-violet-500/50 focus-visible:ring-violet-500/10 py-5' minLength={8} maxLength={16} placeholder="confirmpassword" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              {
                status.status == "Success"?
                <div className="text-white px-3  rounded-3xl bg-green-600/30 border">
                  {
                    status.errors.map((error)=>(error))
                  }
                </div> 
                :
                <div className="text-white px-3 rounded-3xl bg-red-600/30 ">
                  {
                    status.errors.map((error)=>(error))
                  }
                </div>
              }
              <Button className='rounded-3xl bg-linear-to-tl from-violet-500 via-violet-600 to-pink-500 ' type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default SignUp