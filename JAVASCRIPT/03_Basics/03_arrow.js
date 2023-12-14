const user = {
    username:"iqbal",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username} , welcome to website`);
    }

}

// user.welcomeMessage()
// user.username ="sam"
// user.welcomeMessage( )

// console.log(this); // this will give empty object in node and in browser it gives window object

// function chai(){
//     let username = "iqbal"
//     console.log(this.username);
// }

// chai();

// const chai = function(){
//     let username = "iqbal"
//      console.log(this.username);
// }

const chai = () => {
    let username = "iqbal"
     console.log(this);
}

// chai();

// const addTwo = (num1,num2) => {
//     return num1+num2
// }

// console.log(addTwo(3,4));

// const addOne = (num1,num2) =>(num1 + num2)

const addOne = (num1,num2) =>({username: "iqbal"})

console.log(addOne(7,6));

const myArray = [2,3,4,5,6,7]
 

