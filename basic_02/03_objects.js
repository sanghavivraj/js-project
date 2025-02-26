//singleton :- when it is made with constructor it is called singleton


//object literals

const mysub=Symbol("ket1")
console.log( typeof mysub);

const jsUser={
    name:"vraj",
    age:21,     
    [mysub]:"keyy1",
    location: "gandhinagar",
    email: "sanghavi123f@gmail.com",
    isLoggine: false
}

// console.log(jsUser.email) // this the first type to introduce  but we use this 
//console.log(jsUser["email"]) //this is the second type to delcare and also it is better then first.

console.log( typeof jsUser.mysub);


// there are also sum greeting and function wich is i am write in this file but there are reference for that in chai with code github



