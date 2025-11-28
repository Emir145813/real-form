import mongoose from "mongoose";

const MongoDb = process.env.MongoDB as string

export async function connectDB(){
  try{
    await mongoose.connect(MongoDb)
    console.log("Connection Success");
    
  }catch(error){
    console.log("Connection Failed Duo To" , error);
  }
}