import {z} from "zod"

const schemaUser =  z.object({
    name: z.string()
})
export default schemaUser;