import { z } from "zod"

export function UserForm(){

    const role = ['manager','sd1','sd2','technicalHead'] as const

    const schema = z.object({
        firstName:z.string().min(2).max(30),
        lastName:z.string().min(2).max(30),
        age:z.number().gt(0),
        userRole: z.enum(role)

    })


} 