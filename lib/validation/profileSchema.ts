import z from "zod"


const profileSchema = z.object({
  name : z
    .string()
    .min(1),
  lastname : z
    .string()
    .min(2),
  number : z
    .number(),
  prefix : z
    .string(),
  idcardnumber : z
    .number(),
  birthdate : z
    .coerce.date(),
  province : z
    .string(),
  city : z
    .string(),
  fulladdress : z
    .string(),
  postalcode : z
    .number(),
  zipcode : z
    .number()
})

export default profileSchema