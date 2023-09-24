import {z} from "zod"

const schemaUser =  z.object({
    name: z.string(),
    email : z.string().email()
})
export default schemaUser;