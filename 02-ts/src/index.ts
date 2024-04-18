// interface User{
//     name:string;
//     age:number
// }

// function sumOfAge(user1:User,user2:User){
//     return user1.age +user2.age
// }

// const result = sumOfAge({name:"a",age:20},{name:"b",age:22})

// console.log(result);

// Pick  create a new type by selecting a set of properties (Keys) from an existing type (Type).

interface User {
    id: string;
    name: string;
    age:number;
    email:string;
    password:string;
}
 


// interface UpdateProps { // it needs to be same value as above User interface
//     name:string;
//     age:number;
//     password:string;
// }

type UpdateProps = Pick<User, 'name' | 'age' | 'email'>

function updateUser(props:UpdateProps){
    // hit db to update the user
}


// Partial
// make property of a type optional

type UpdatePropsOptional = Partial<UpdateProps>

function updateUser2( props:UpdatePropsOptional){
    // do update 
}

updateUser2({
    name:"test"
})

// updateUser({
//     name:"test",
//     age:5,
//     email:"asd@sdaf.com"
// })

// Readonly :- configuration object that should not be altered after initialization, making it Readonly ensures its properties cannot be changed.

type UserProfile ={
    readonly name:string;
    age:number;
    country:string
}

const obj:UserProfile = {
    name:'test',
    age:20,
    country:'abc'
}

// obj.name = "John" // Cannot assign to 'name' because it is a read-only property.

obj.age= 22

interface Config {
     endpoint: string;
     apiKey: string;
  }
  
  const config: Readonly<Config> = {
    endpoint: 'https://api.example.com',
    apiKey: 'abcdef123456',
  };


// Record and Map

// Record
// Record let’s you give a cleaner type to objects

type User2 = {
    id:string,
    userName:string
}

// type Users ={
//     [key:string]:User2
// }

type Users = Record<string,User2>

const users:Users = {
    "aa@1":{
        id:'abc123',
        userName:"abc"
    },
    "bb@1":{
        id:"xyz!@",
        userName:"nmp"
    }
}

type Users1 = Record<string,{age:number,email:string}>

const users1:Users1 ={
    "ras@1":{age:21,email:"sdf@ewf.com"},
    "ras2":{age:44,email:"ad@asd"},
}


// Map
// another way for key value pair

type User3 ={
    name:string;
    age:number;
    email:string;
}

const users2 = new Map<string,User3>()
users2.set("qwe",{name:'Kasd',age:20,email:"ads@asd"})
users2.set("abs",{name:'Blkj',age:40,email:"kjda@asd"})

const user = users2.get("qwe")
console.log(user);
users2.delete("abs")

console.log(users2);

// Exclude
// In a function that can accept several types of inputs but you want to exclude specific types from being passed to it

type EventType = 'click' | 'scroll' | 'mousemove';
type ExcludeEventType = Exclude<Event, 'scroll'>; // 'click' | 'mousemove'

const handleEvent = (event: ExcludeEventType) => {
  console.log(`Handling event: ${event}`);
};

// Type inference in zod

// When using zod, we’re done runtime validation. 
// For example, the following code makes sure that the user is sending the right inputs to update their profile information


import { z } from 'zod';
import express from "express";

const app = express();

// Define the schema for profile update
const userProfileSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "Invalid email format" }),
  age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
});

type FinalUserSchema = z.infer<typeof userProfileSchema>

app.put("/user", (req, res) => {
  const { success } = userProfileSchema.safeParse(req.body);
//   const updateBody:{
//     name:string;
//     email:string;
//     age?:number;
//   } = req.body; // how to assign a type to updateBody?
  const updateBody:FinalUserSchema = req.body; // does not need to retype 

  if (!success) {
    res.status(411).json({});
    return
  }
  // update database here
  res.json({
    message: "User updated"
  })
});

app.listen(3000);