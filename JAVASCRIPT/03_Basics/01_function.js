function sayMyName(){
    console.log("I");
    console.log("q");
    console.log("b");
    console.log("a");
    console.log("l");
}

// sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1+ number2);
// }


function addTwoNumbers(number1,number2){
    return number1+ number2;
}

const result = addTwoNumbers(3,4)

// console.log("Result:", result);

function loginUserMessage(username){
    if (username === undefined) {
        // console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage());



function calculateCartPrice(val1,val2,...num1){
        return num1
}

// console.log(calculateCartPrice(200,400,500,569,594,689,457,443,8998765,456,76,567,876,567,45));

const user = {
    username:"iqbal",
    price:199

}

function handleObject(anyobject){
        console.log(`Username is  ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    username:"sam",
    price:888
})

const myNewArray = [200,400,500,600]

function returnSecondvalue(getArray){
    return getArray[2]
}

console.log(returnSecondvalue(myNewArray));
console.log(returnSecondvalue([200,400,500,600]));