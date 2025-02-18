//arrays
    // it is also resizable in javascript
    //there can be any type of array
    //Lavascript array-copy operation make shallow copies

    const myArr=[0,1,2,4,8]
    const myHero=["shaktiman","batmen"]

    const myArr2= new Array(1,2,4,7)//deffrent type to declare the array

    //console.log(myHero[1]);

    //Array method

    myArr.push(7) // use to add element in array
//    console.log(myArr);

    myArr.pop()//remove the lastc element and also do not give any argument like push
    
    myArr.unshift(9)// it is use to add elemeent in first postion of array
   // console.log(myArr)
    
    //console.log(myArr.indexOf(4));
    //console.log(myArr.includes(7));
    
    // const newArr=myArr.join()

    // console.log(myArr)
    // console.log(typeof newArr)    
    
    //slice & splice

    //slice:- returen a copy of section an array

    console.log("A",myArr)
    const myA1=myArr.slice(1,3) // it include the staring index and not inlucde the last index which is give in argument

    console.log(myA1)
    
    console.log("B",myArr)
    const myA2=myArr.splice(1,3)// it also include the last index of the argment and one more thing it remove the element from the orginal array which is pass in argument
    console.log(myA2)
    
    console.log("C",myArr)
    