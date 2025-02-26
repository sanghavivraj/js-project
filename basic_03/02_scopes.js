let a = 10
const b = 20
var c = 30

// console.log(a)
// console.log(b)
// console.log(c)

//nested function

function one()
{
    const username="vraj"

    function two()
    {
        const website="guruji"
        console.log(username);
    }
    // console.log(website)

    two()
    
}

one()
// why the two function is working because the one functione is the parent of function two so the child is used the parent variable/object but when we call the console the website outside the two function it is not working bacause the parent do not use the child variable/object