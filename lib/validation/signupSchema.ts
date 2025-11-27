import z from "zod";

export const signupSchema = z.object({
  name : z
    .string()
    .max(10 , {message : "Name letters should be least than 10"}),
  email : z
    .string()
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