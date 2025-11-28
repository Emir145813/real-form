"use server"
import mongoose from "mongoose"
import { ActionData } from "../formtype"
import { usersModel } from "../models/usersModel"
import { signupSchema } from "../validation/signupSchema"
import { connectDB } from "../db"


async function createUser(state :ActionData ,formData : FormData) : Promise<ActionData> {
  connectDB();
  const data = Object.fromEntries(formData.entries())


  const result = signupSchema.safeParse(data);
  const userIsExist = await usersModel.findOne({email : result.data?.email});
  const passwordMatch = result.data?.password === result.data?.confirmpassword;

  if(!result.success){
    return {
      status : "Error",
      errors : ["Fill all fields with valid data"]
    }
  }

  if(!passwordMatch){
    return{
      status : "Error",
      errors : ["Password is not match"]
    }
  }

  if(userIsExist){
    return{
      status : "Error",
      errors : ["You already have account"]
    }
  }

  usersModel.create({
    name : result.data?.name,
    lastname : result.data?.lastname,
    username : result.data?.username ,
    email : result.data?.email,
    password : result.data?.password,
    confirmpassword : result.data?.confirmpassword 
    })

  return {
    status : "Success",
    errors : ["Creating Account Was Successfull"]
  }
}

export default createUser