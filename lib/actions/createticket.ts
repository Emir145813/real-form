"use server"

import { deprecate } from "util";
import { connectDB } from "../db";
import { ActionData } from "../formtype"
import { servicesModel } from "../models/servicesModel";
import { servicesSchema } from "../validation/servicesSchema";

async function createTicket(prevState :ActionData , formData : FormData): Promise<ActionData>{

  connectDB();
  const data = Object.fromEntries(formData.entries());
  const result = servicesSchema.safeParse(data);


  if(!result.success){
    return{
      status : "Error",
      errors : ["Fill All Fields"]
    }
  }

  servicesModel.create({
    email : result.data.email,
    message : result.data.message,
    department : result.data.departments,
    date : result.data.date
    // document : result.data.document
  })










  return {
    status : "Success",
    errors : ["Service Request Submited"]
  }
}











export default createTicket