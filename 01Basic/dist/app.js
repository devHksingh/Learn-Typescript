"use strict";
// let num1:number = 1
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
function logString(arg) {
    console.log(arg);
    return arg;
}
logString('logged In');
function logNumber(arg) {
    console.log(arg);
    return arg;
}
logNumber(3);
function logArray(arg) {
    console.log(arg);
    return arg;
}
logArray([4, 6]);
// function logAnything(arg:any){  //** wrong way */
//     console.log(arg);
//     return arg
// }
function logAnything(arg) {
    console.log(arg);
    return arg;
}
logAnything([4, 6]);
logAnything('hi');
logAnything(true);
function getOldest(people) {
    return people.sort((a, b) => b.age - a.age)[0];
}
const people = [{ age: 30 }, { age: 40 }, { age: 10 }];
const players = [{ name: 'jhon', age: 30 }, { name: 'jane', age: 10 }, { name: 'rock', age: 40 }];
const person = getOldest(players);
person.age;
person.name;
const person1 = getOldest(people);
person1.age;
const fetchPostData = (path) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`http://example.com${path}`);
    return response.json();
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    const posts = yield fetchPostData('/posts');
    posts[0].description;
    posts[0].title;
    posts[0].id;
}))();
const fetchUserData = (path) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`http://example.com${path}`);
    return response.json();
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield fetchUserData('/users');
    user[0].age;
    user[0].id;
    user[0].name;
}))();
const fetchData = (path) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`http://example.com${path}`);
    return response.json();
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield fetchData('/users');
    user[0].age;
    user[0].id;
    user[0].name;
}))();
;
(() => __awaiter(void 0, void 0, void 0, function* () {
    const post = yield fetchData('/users');
    post[0].id;
    post[0].title;
    post[0].description;
}))();
const auth = {
    username: 'coder',
    password: 'secert',
    login(username, password) {
        //
        return true;
    }
};
let num = 1;
function doSomething(keyPressed) {
    // doSomething
}
doSomething("up");
doSomething("down");
// doSomething("1")
// doSomething("random")
//...
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 0] = "up";
    Direction[Direction["down"] = 1] = "down";
    Direction[Direction["right"] = 2] = "right";
    Direction[Direction["left"] = 3] = "left";
})(Direction || (Direction = {}));
function doSomething2(keyPressed) {
    // doSomething
    if (keyPressed === Direction.up) {
        // ....
    }
    //....
}
doSomething2(Direction.up);
doSomething2(Direction.down);
doSomething2(Direction.left);
console.log(Direction.down);
console.log(Direction.up);
console.log(Direction.left);
