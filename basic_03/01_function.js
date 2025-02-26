function sayname()
{
    console.log("v");
    console.log("r");
    console.log("a");
    console.log("j");
    
}

// sayname()

// function addTwoNumber(number1,number2) // it's called parameters
// {
//     console.log(number1+number2);
    
// }
// addTwoNumber(50,28) // it's called arguments


function addTwoNumber(number1,number2)
{
    return number1 + number2
}

const result=addTwoNumber(40,50)

// console.log(result)


// function loggedIn(username)
// {
//     return `${username} just logged in`
// }

// console.log((loggedIn("vraj")));
//console.log(loggedIn());   //the answer could e undefined


function loggedIn(username="vraj") //vraj is default value means when the user do not enter any value then this default values is run and when user enter the argument then it overwritten that value.
{
    if(!username)
    {
        console.log("please enter username: ");
        return
        
    }
    return `${username} just logged in`
}

// console.log(loggedIn());

function calcuateCartPrice(...num)
{
    return num
}

// console.log(calcuateCartPrice(200,500,400,800,700));


const user ={
    name:"cover",
    price:200
}

function getValueOfUser(anyobject)
{
    console.log(`the price of ${anyobject.name} is ${anyobject.price} `)
    
}

getValueOfUser(user)



