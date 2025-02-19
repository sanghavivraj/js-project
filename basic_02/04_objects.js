// const tinderUser=new Object() // it is singleteon 
const tinderUser={} // it is not singleton
tinderUser.id="1234ab"
tinderUser.name="vraj"
tinderUser.loggIn=false

// console.log(tinderUser)

const regularUser={
    email:"sanghavi123a@ac.in",
    fullname:{
        username:{
            firstname:"vraj",
            lastname:"sanghavi"
        }
    }
}

//console.log(regularUser.fullname?.username)

// now we learn how to combine two objects

const obj1={1:"v",2:"r"}
const obj2={3:"a",4:"j"}

// const obj3=Object.assign(obj1,obj2)
// console.log(obj3)

//const obj3={...obj1,...obj2}
// console.log(obj3)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser)) // it's important

const course={
    coursename:"javascript",
    price:555,
    courseInstructure: "youtube"

}

const {courseInstructure}=course
console.log(courseInstructure)

