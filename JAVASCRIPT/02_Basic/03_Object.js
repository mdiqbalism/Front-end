// singleton 
// Object.create

// object literals 

const mySym = Symbol("key1")

const Jsuser = {
    name:"iqbal",
    "full name":"Iqbal Ali",
    [mySym]:"myKey1",
    age:23,
    location:"Nalanda",
    email:"iqbal@google.com",
    lastLoginDays:["Monday","Saturday"]
}

// console.log(Jsuser.email)
// console.log(Jsuser["email"]);
// console.log(Jsuser["full name"]);
// console.log(Jsuser[mySym]);

Jsuser.email= "iqbal@chatgpt.com"
// Object.freeze(Jsuser)
Jsuser.email = "iqbal@youtube.com"
console.log(Jsuser)

Jsuser.greeting = function(){
    console.log("Hello Js user");
}

console.log(Jsuser.greeting)
