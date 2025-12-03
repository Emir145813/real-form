import mongoose, { Schema } from "mongoose";

const servicesSchema = new Schema({
  email : {type : String},
  message : {type : String},
  departments : {type : String},
  document : {type : String}
})


export const servicesModel = mongoose.models.services || mongoose.model("services" , servicesSchema);