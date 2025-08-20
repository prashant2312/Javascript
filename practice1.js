//using filter method print the values which comes more than one time

const numbers =[1,2,3,4,5,6,7,4,8,3,9]
let UniqueValues = numbers.filter((ele,index,values)=>
    {
        return values.indexOf(ele)!== index
    })
    console.log(UniqueValues);

    //armstrong number
    

    