// let num1:number = 1

// function calculate(num1:number,num2:number){
//     return num1+num2
// }

// console.log(num1,3);


// function getTotal(numbers:number[]){
//     return numbers.reduce((acc,item)=>{
//         return acc +item
//     },0)
// }

// console.log(getTotal([3,2,1]));


// const user ={
//     firstName:'jhon',
//     lastName:'Doe',
//     role: 'professor'
// }
// let num1:number = 1

// function calculate(num1:number,num2:number){
//     return num1+num2
// }

// console.log(num1,3);


// function getTotal(numbers:number[]){
//     return numbers.reduce((acc,item)=>{
//         return acc +item
//     },0)
// }

// console.log(getTotal([3,2,1]));


// const user ={
//     firstName:'jhon',
//     lastName:'Doe',
//     role: 'professor'
// }
// let num1:number = 1

// function calculate(num1:number,num2:number){
//     return num1+num2
// }

// console.log(num1,3);


// function getTotal(numbers:number[]){
//     return numbers.reduce((acc,item)=>{
//         return acc +item
//     },0)
// }

// console.log(getTotal([3,2,1]));


// const user ={
//     firstName:'jhon',
//     lastName:'Doe',
//     role: 'professor'
// }

// console.log(user.firstName);

// Type alias

// type User ={
//     name:string;
//     age:number;
//     address:string;
//     phone?: number //optional
// }

// const employee:User ={
//     name:'jhon',
//     age:22,
//     address:"random"
// }

// function login(userData:User):User{

//     return userData
// }

// console.log(login(employee));

// type ID =number | string;

// const userId :ID ='123'

// // Interfaces

// interface Transaction {
//     payeeAccNumber :number;
//     payerAccNumber:number;

// }

// interface BankAccount {
//     accountNumber:number;
//     accountHolder:string;
//     balance:number;
//     isActive:boolean;
//     transactions: Transaction[]
// }

// const transaction1 : Transaction ={
//     payerAccNumber:456,
//     payeeAccNumber:488,
// }

// const transaction2 : Transaction ={
//     payerAccNumber:456,
//     payeeAccNumber:222,
// }

// const bankAccount : BankAccount={
//     accountNumber: 123,
//     accountHolder: 'jhon doe',
//     balance:4000,
//     isActive:true,
//     transactions:[transaction1,transaction2]
// }

// ** 2 iterfaces { extend}  **

// interface Book{
//     name:string;
//     price:number;
// }

// interface Ebook{
//     name:string;
//     price:number;
//     fileSize:number;
//     format:string
// }

// interface AudioBook {
//     name:string;
//     price:number;
//     fileSize:number;
//     format:string;
//     duration:number;
// }


// interface Book{
//     name:string;
//     price:number;
// }

// interface Ebook extends Book{
//     // name:string;
//     // price:number;
//     fileSize:number;
//     format:string
// }

// interface AudioBook  extends Ebook{
//     // name:string;
//     // price:number;
//     // fileSize:number;
//     // format:string;
//     duration:number;
// }



// const book:AudioBook={
//     name: 'Atomic Habits',
//     price:1200,
//     fileSize:220,
//     format:'pdf',
//     duration:5
// }


// ** Merging 2 interface **

// interface Book{
//     name:string;
//     price:number;
// }

// interface Book {
//     size:number
// }

// const book:Book={
//     name:'Atomic Habbit',
//     price:1200,
//     size:45,
// }

// ** diiference btw type and interface  **

// type Book = {
//     name:string;
//     price:number;
// }

// type Book={     // ** Error: Duplicate identifier 'Book'
//     size:number;
// }

// type SanitizedString = string;
// type EvenNumber = number;  // ** Interface only work for object and primitive type => type

//**  Union

// type ID = number | string;

// function printId(id:ID){
//     // console.log(id);
    
//     //**  Narrowing

//     if(typeof(id)=== "string"){
//         console.log(id.toUpperCase());
//     }else{
//         console.log(id);
        
//     }

    
    
// }

// printId(1)
// printId("one")


// function getFirstThree(x:string | number[]){
//     return x.slice(0,3)
// }

// // console.log(getFirstThree('hello'));
// console.log(getFirstThree([1,2,3,4]));

// ** Generics

function logString(arg:string){
    console.log(arg);
    return arg
    
}

logString('logged In')


function logNumber(arg:number){
    console.log(arg);
    return arg
    
}

logNumber(3)

function logArray(arg:any[]){
    console.log(arg);
    return arg
    
}

logArray([4,6])

// function logAnything(arg:any){  //** wrong way */
//     console.log(arg);
//     return arg
    
// }

function logAnything<T>(arg:T):T{    //**Generics */
    console.log(arg);
    return arg
    
}

logAnything([4,6])
logAnything('hi')
logAnything(true)

// interface HasAge{
//     age:number
// }

// function getOldest(people: HasAge[]){
//     return people.sort((a,b)=> b.age -a.age)[0]
// }

// const people =[{age:30},{age:40},{age:10}]

// interface Players{
//     name:string;
//     age:number;
// }

// const players:Players[] = [{name:'jhon',age:30},{name:'jane',age:10},{name:'rock',age:40}]

// getOldest(people).age;

// const person:Players=getOldest(players)

// const person = getOldest(players) as Players
//**  Assertion
// console.log(person.name);
// console.log(person.age);

// ** Genrics

interface HasAge{
    age:number
}

function getOldest<T extends HasAge>(people: T[]):T{
    return people.sort((a,b)=> b.age -a.age)[0]
}

const people:HasAge[] =[{age:30},{age:40},{age:10}]

interface Players{
    name:string;
    age:number;
}

const players:Players[] = [{name:'jhon',age:30},{name:'jane',age:10},{name:'rock',age:40}]

const person = getOldest(players) 

person.age
person.name

const person1 = getOldest(people) 
person1.age

// ex2

interface IPost {
    title:string;
    id:number;
    description:string;
}

interface IUser{
    id:number;
    name:string;
    age:number;
}

const fetchPostData = async (path:string) :Promise<IPost[]> =>{
    const response = await fetch(`http://example.com${path}`)
    return response.json()
}

;(async()=>{
    const posts = await fetchPostData('/posts')
    posts[0].description
    posts[0].title
    posts[0].id
})();

const fetchUserData = async (path:string) :Promise<IUser[]> =>{
    const response = await fetch(`http://example.com${path}`)
    return response.json()
}

;(async()=>{
    const user = await fetchUserData('/users')
    user[0].age
    user[0].id
    user[0].name
    
})();

const fetchData = async <ResultType>(path:string):Promise<ResultType>=>{
    const response = await fetch(`http://example.com${path}`)
    return response.json()
}

;(async()=>{
    const user = await fetchData<IUser[]>('/users')
    user[0].age
    user[0].id
    user[0].name
    
})();

;(async()=>{
    const post = await fetchData<IPost[]>('/users')
    post[0].id
    post[0].title
    post[0].description
    
})();


// ** Structural typing/ Duck Typing

// interface ICreadential {
//     username:string;
//     password:string;
//     isAdmin?:boolean
// }

// function login(credentials:ICreadential):boolean{
//     console.log(credentials);
//     return true
// }

// const user:ICreadential ={
//     username:'coder',
//     password:'secret',
//     isAdmin: true
// }

// login(user)

interface IAuth{
    username:string;
    password:string;
    login(username:string,password:string):boolean
}

const auth:IAuth = {
    username:'coder',
    password:'secert',
    login(username:string,password:string){
        //
        return true
    }
}


let num = 1

// Enums

type KeyInput = "up" |"down" | "left" | "right"

function doSomething(keyPressed:KeyInput){
    // doSomething
}


doSomething("up")
doSomething("down")
// doSomething("1")
// doSomething("random")
//...

enum Direction{
    up, //0
    down, //1
    right, //2
    left //3
}

// How to changes this value
enum Direction1{
    up=1, //1
    down, //2
    right, //3
    left //4
}
// it also change to string

enum Direction2{
    up= 'up', //up
    down = 'down', //down
    right = 'right', //right
    left = 'left' // left
}

function doSomething2(keyPressed:Direction){
    // doSomething
    if(keyPressed === Direction.up){
        // ....
    }
    //....
}

doSomething2(Direction.up)
doSomething2(Direction.down)
doSomething2(Direction.left)

console.log(Direction.down);
console.log(Direction.up);
console.log(Direction.left);

// common usecase in express 

enum ResponseStatus {
    Success =200,
    NotFound =404,
    Error = 500
}

/*
const app = express()
app.get("/", (req, res) => {
    if (!req.query.userId) {
			res.status(ResponseStatus.Error).json({})
    }
    // and so on...
		res.status(ResponseStatus.Success).json({});
})

*/

// Genric

function identity<T>(arg:T):T{
    return arg
}

let output1 = identity<string>("myString")
let output2 = identity<number>(100)

output1.toUpperCase()


function getFirstElement<T>(arg:T[]):T{
    return arg[0]
}

const op1= getFirstElement([1,22,44])
const op2 = getFirstElement(["asd","asd1"])
const op3 = getFirstElement([1,"asd1"])
// const op4 = getFirstElement<number>([1,2,4,"asd1"]) //Type 'string' is not assignable to type 'number'

// console.log(op3.toLowerCase()); //  type error : .toLowerCase() DOES NOT WORK ON NUMBER .it must be a string

