import mongoose, { Schema } from "mongoose";


const profileSchema = new Schema({
  name : {type : String},
  lastname : { type : String},
  number : {type : Number},
  idcardnumber : {type : Number},
  birthdate : {type : String}
});



const profileModel = mongoose.models.profile || mongoose.model("profile",profileSchema);

export default profileModel