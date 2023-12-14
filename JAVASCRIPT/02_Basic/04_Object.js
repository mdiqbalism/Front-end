// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123fghj"
tinderUser.name = "Guddu"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email:"guddy@yahho.com",
    fullname:{
        userfullname:{
            firstname:"iqbal",
            lastname:"Ali"
        }
    }
}


console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"e"}
const obj3 = {5:"f",6:"h"}

// const obj4 = Object.assign({},obj1,obj2,obj3)

const obj4 = {...obj1,...obj2,...obj3}
console.log(obj4);

const users = [
    {
        id:1,
        email:"guddu@photo.com"
    },
    {
        id:1,
        email:"guddu@photo.com"
    },
    {
        id:1,
        email:"guddu@photo.com"
    },
    {
        id:1,
        email:"guddu@photo.com"
    }
]

users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"Iqbal"
}

//course.courseInstructor

const  {courseInstructor: instructor} = course 

// console.log(courseInstructor);
console.log(instructor);

// {
//     name:"iqbal",
//     coursename:"js in hindi",
//     price:"free"
// }

[
    {},
    {},
    {}
]

