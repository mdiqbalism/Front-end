// Primitive 

// 7 types : String ,Number , Boolean , Null , undefiend , Symbol, BingInt

const score = 100
const scoreValue = 27.9

const isLoggedInd = false
const outsideTemp = null

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 35363738394949438n

// Reference  (Non - primitive)

// Array , Object , Functions

const heros = ["shaktiman","naagraj","doga"]

let myObj = {
        name:"iqbal",
        age:23,
    
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof bigNumber);

// ++++++++++++++++++

// Stack (Primitive ), Heap (Non-Primitive)

let myYoutubename = "iqbal"

let anothername = myYoutubename

anothername = "iqbaltalk"

console.log(anothername)