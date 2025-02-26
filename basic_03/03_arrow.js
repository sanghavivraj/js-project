//this is show the current context.
const user={
    name:"vraj",
    price:9999,

    welecomeMessage:function()
    {
        console.log(`${this.name}, thanks for logging in our website`)
        // console.log(this)
        
        
    }
}

// user.welecomeMessage()
// user.name = "smeet"
// user.welecomeMessage()

// console.log(this)


// function chai()
{   
    // let username="vraj"
    // console.log(this.username)
    
}


// const chai= () =>
// {
//     let username="vraj"
//     console.log(this)
// }

// chai()


// const addTwoNumber=(num1,num2)=>{
//     return num1+num2
// } //it is explicite mwthod because we use the return keyword.

// console.log(addTwoNumber(11,5))

// const addTwonumber=(num1,num2) =>num1+num2 // implecite method.
// console.log(addTwoNumber(11,5))

//when we have to delcare object like this 
const addTwo=(num1,num2)=>({name:"vraj"})
console.log(addTwo(5,11))