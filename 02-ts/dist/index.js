"use strict";
// interface User{
//     name:string;
//     age:number
// }
function updateUser(props) {
    // hit db to update the user
}
function updateUser2(props) {
    // do update 
}
updateUser2({
    name: "test"
});
const obj = {
    name: 'test',
    age: 20,
    country: 'abc'
};
// obj.name = "John" // Cannot assign to 'name' because it is a read-only property.
obj.age = 22;
const config = {
    endpoint: 'https://api.example.com',
    apiKey: 'abcdef123456',
};
const users = {
    "aa@1": {
        id: 'abc123',
        userName: "abc"
    },
    "bb@1": {
        id: "xyz!@",
        userName: "nmp"
    }
};
const users1 = {
    "ras@1": { age: 21, email: "sdf@ewf.com" },
    "ras2": { age: 44, email: "ad@asd" },
};
// Map
// another way for key value pair
const users2 = new Map();
users2.set("qwe", { name: 'Kasd', age: 20, email: "ads@asd" });
users2.set("abs", { name: 'Blkj', age: 40, email: "kjda@asd" });
const user = users2.get("qwe");
console.log(user);
users2.delete("abs");
console.log(users2);
