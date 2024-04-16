import { useState } from 'react'
import { z } from 'zod'
import { fromZodError } from 'zod-validation-error'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const role = ["admin","manager","sde"] as const

  const UserSchema = z.object({
    id:z.string().or(z.number()),
    username:z.string().min(3).default('asa'),
    age: z.number().gt(0),
    birthday: z.date(),
    email: z.string().email(),
    password: z.string().min(4),
    isProgrammer: z.boolean().optional(),
    // role: z.enum(["admin","manager","sde"])
    userrole: z.enum(role),
    skiils: z.array(z.string().min(1)),
    coords: z.tuple([z.number(),z.number(),z.number()]),
    cards: z.tuple([z.string(),z.date()]).rest(z.number())

  })

  // const UserSchema = z.object({
  //   username:z.string().min(3).default('asa'),
  //   age: z.number().gt(0),
  //   birthday: z.date(),
  //   email: z.string().email(),
  //   password: z.string().min(4),
  //   isProgrammer: z.boolean().optional(),
  //   // role: z.enum(["admin","manager","sde"])
  //   userrole: z.enum(role)
  // }).partial()

  // const UserSchema = z.object({
  //   username:z.string().min(3).default('asa'),
  //   age: z.number().gt(0),
  //   birthday: z.date(),
  //   email: z.string().email(),
  //   password: z.string().min(4),
  //   isProgrammer: z.boolean().optional(),
  //   // role: z.enum(["admin","manager","sde"])
  //   userrole: z.enum(role)
  // }).deepPartial()

  // const UserSchema = z.object({
  //   username:z.string().min(3).default('asa'),
  //   age: z.number().gt(0),
  //   birthday: z.date(),
  //   email: z.string().email(),
  //   password: z.string().min(4),
  //   isProgrammer: z.boolean().optional(),
  //   // role: z.enum(["admin","manager","sde"])
  //   userrole: z.enum(role)
  // }).pick({username:true})


  // const UserSchema = z.object({
  //   username:z.string().min(3).default('asa'),
  //   age: z.number().gt(0),
  //   birthday: z.date(),
  //   email: z.string().email(),
  //   password: z.string().min(4),
  //   isProgrammer: z.boolean().optional(),
  //   // role: z.enum(["admin","manager","sde"])
  //   userrole: z.enum(role)
  // }).omit({username:true})


  // const UserSchema = z.object({
  //   username:z.string().min(3).default('asa'),
  //   age: z.number().gt(0),
  //   birthday: z.date(),
  //   email: z.string().email(),
  //   password: z.string().min(4),
  //   isProgrammer: z.boolean().optional(),
  //   // role: z.enum(["admin","manager","sde"])
  //   userrole: z.enum(role)
  // }).extend({name: z.string()})


  // const UserSchema = z.object({
  //   username:z.string().min(3).default('asa'),
  //   age: z.number().gt(0),
  //   birthday: z.date(),
  //   email: z.string().email(),
  //   password: z.string().min(4),
  //   isProgrammer: z.boolean().optional(),
  //   // role: z.enum(["admin","manager","sde"])
  //   userrole: z.enum(role)
  // }).merge(z.object({name: z.string()}))

  type User = z.infer<typeof UserSchema>

  const user = {
    id:15,
    username:"abc",
    birthday: new Date(),
    email: "abd@asd.com",
    password:'1236',
    isProgrammer:true,
    role:"sde",
    skiils:["js"],
    coords:[1,2,3],
    cards:["test",new Date(),2,5,8]
  }
  // console.log(UserSchema.safeParse(user));
  // console.log(UserSchema.shape);
  // console.log(UserSchema.shape.userrole);
  console.log(UserSchema.partial().parse(user));
  const result =UserSchema.partial().parse(user);

  if(!result.success){
    console.log(fromZodError(result.error));
    
  }

  // record type

  const UserMap = z.record(z.string(),z.number())
  
  const user1 ={
    adssa:5,
    qwe:8
  }

  console.log(UserMap.parse(user1));
  

  return (
    <>
      
    </>
  )
}

export default App
