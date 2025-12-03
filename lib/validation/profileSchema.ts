import z from "zod"


const profileSchema = z.object({
  name : z
    .string()
    .min(1),
  lastname : z
    .string()
    .min(2),
  number : z
    .string()
    .min(1)
    .max(11),
  prefix : z
    .string(),
  idcardnumber : z
    .string()
    .min(10)
    .max(10),
  birthdate : z
    .coerce.date(),
  province : z
    .string(),
  city : z
    .string(),
  fulladdress : z
    .string(),
  postalcode : z
    .string(),
  zipcode : z.coerce
    .number()
})

export default profileSchema