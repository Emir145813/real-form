import z from "zod";

export const signupSchema = z.object({
  name : z
    .string()
    .min(2  , {message : "Name letters should be at least 2"})
    .max(10 , {message : "Name letters should be at most 10"}),
  lastname : z
    .string()
    .min(2  , {message : "Last Name letters should be at least 2"})
    .max(10 , {message : "Last Name letters should be at Most 10"}),
  username : z
    .string()
    .min(2  , {message : "Username letters should be least 2"})
    .max(10 , {message : "Username letters should at most 10"}),
  email : z
    .email()
    .endsWith("@gmail.com" , {message : "Only @gmail is supported"}),
  password : z
    .string()
    .min(8 , {message : "Password should contain 8 letter"})
    .max(16, {message : "Password should be at most 16 letter"}),
  confirmpassword : z
    .string()
    .min(8 , {message : "Password should contain 8 letter"})
    .max(16, {message : "Password should be at most 16 letter"}),
})