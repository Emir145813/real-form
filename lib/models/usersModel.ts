import mongoose, { Schema } from "mongoose";


const usersSchema = new Schema ({
    name : {type : String , require: true},
    lastname : {type : String , require: true},
    username : {type : String , require: true},
    email : {type : String , require: true},
    password : {type : String , require: true},
    confirmpassword : {type : String , require: true}
});


export const usersModel = mongoose.models.users || mongoose.model("users" , usersSchema);