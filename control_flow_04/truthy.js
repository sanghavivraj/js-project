const username=""

if(username)
{
    console.log("got it");
    
}
else{
    console.log("somthing is missing")
    
}

//falsy values:- flase, "", null,underfind, NAN, 0 , -0, BigInt, 0n this  all are the falsy values in which if we only put the name of the codtion and we can not compare the values with the codtion then it automatically print the falsy values which meanse if we can wrigth the value for the falsy in else condtion then it print out in output.

//truthy values: "0", [], 'flase', {}, function(){}, " "



const object1={}

if(Object.keys(object1).length===0)
{
    console.log("empty");
    
}


// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
// this topic is basically desig for to check the nulll and undefind values.