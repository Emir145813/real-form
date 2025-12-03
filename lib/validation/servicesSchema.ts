import z from "zod";

export const servicesSchema = z.object({
  email : z
    .email()
    .min(1)
    .max(32),
  message : z
    .string()
    .min(1)
    .max(50),
  departments : z
    .string()
  ,
  date : z
    .string()
  // document : z 
  //   .file()
})