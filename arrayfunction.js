//array in javascript
//when we use var,we can stored only one value at a time
//when we feel like storing multiple values in a single variable then we use array
//array is a single variable that is used to store different elements
//it is often used when we want to store list of elements and access them by a single variable
//in javascript, we have an array class,and array are the prototypes of this class

//var myFreinds = ["Rajesh","Ramesh","Suresh","Mahesh",true,50.5,100];
//first element of array is called lower index and last element of array is called upper index
//index  of array starts from 0
//array is a collection of elements it means rajesh,ramesh etc are elements of array

// 1.traversal of array

//navigating or display through the array is called traversal of array
//if we want to get the single data at a time and also
// if we want to change the data

//var myFreinds = ["Rajesh","Ramesh","Suresh","Mahesh",true,50.5,100];
//console.log(myFreinds[1]);//if we want to get the nmae of ramesh

//if we want to check the length of elements of an array
//console.log(myFreinds.length);
//console.log(myFreinds[6]);//if we want to get the last element of an array then we can use length-1
 
//we use for loop to navigate

//var myFreinds = ["Rajesh","Ramesh","Suresh","Mahesh",true,50.5,100];
//for(var i=0;i<myFreinds.length;i++)
//{
   // console.log(myFreinds[i]);
//}

//after es6 we have for..in and for..of loop too

//var myFreinds = ["Rajesh","Ramesh","Suresh","Mahesh",true,50.5,100];
//for(let elements in myFreinds){
   // console.log(elements)
//}//for in loop give index no of elements

//for of loop

//for (let elements of myFreinds){
   // console.log(elements);
    
//}//for of loop give elements of array

//for each loop
//calls a function for each element in the array.

//var myFreinds = ["Rajesh","Ramesh","Suresh","Mahesh",true,50.5,100];
//myFreinds.forEach(function(element,index,array)
//{
//console.log(element+" index : " +index + " "+ array);

//}
//);//array give all values

//using fat arrow method

//myFreinds.forEach((element,index,array)=>
//{
   // console.log(element+" index : " + index+ " " + array);
//});
//fat arrow method do not support this argument

// 2. searching and filter in array

//(i) indexof() method

//var myFreinds = ["Rajesh",50,"Ramesh", "Suresh","Mahesh",true,50,100];
//console.log(myFreinds.indexOf(50));//give first index no

// (ii.) lastindexof() method
//console.log(myFreinds.lastIndexOf(50));//give last index no.

//(iii.)includes()method

//const numbers =[1,2,3,4,5,6,7,5,9]
//console.log(numbers.includes(16));//includes method give boolean value=true or false

//filter method
 

 //(i) find method
 //const numbers =[1,2,3,4,,5,6,4,7,5,9];
//const result = numbers.find((curElem) =>
    //{return curElem>6;

//});
//console.log(result);//give only first occurence no.

//findIndex method
//const number =[1,2,3,4,5,6,7,9];
//const result1=number.map((curElem)=>
    
     // { return curElem*5})
      //console.log(result1)
    
//const result2 = result1.findIndex((curElem)=>
//{ return curElem>10;

//});
//console.log(result2);//we will use map method with find index method to find correct answer

//filter method

//const number =[1,2,3,4,5,6,7,6,9];
//const result1=number.filter((curElem)=>
    
     // {return curElem>4;

//});
//console.log(result1);

// ex. lets say user wants to delete value 6
//let value = 6;
//const number =[1,2,3,4,5,6,7,6,9];
//let updatedcart = number.filter((curElem)=>
    //{
        //return curElem !== value;
    //});
    //console.log(updatedcart);

    //ques2: given an array of products where each product has a name and a 
    // price, write a function that uses the filter method to return an array containing
    // only the products with a price less than or equal to 500.

   //  const products = [
      // {name:"laptop",price:1200},
      // {name:"phone",price:800},
      // {name:"tablet",price:300},
      // {name:"smartwatch",price:150},
   //  ];

    // filter products with a price less than or equal to 500

    //case for giving the name of variable
//cAMEL CASE= FilterProductsList
// snake case= filter_products_list
// filterProductsLists
   //  const FilterProducts = products.filter(ele=>ele.price<500);
   //  console.log(FilterProducts);

    //Filter Unique Values
// function f1(){

// }
// const a=function(){

// }
// const b=()=>{

// }
//     const numbers = [1,2,3,4,5,6,7,8,8,9]
//     let UniqueValues = numbers.filter((ele,index,value)=>{
      
      
//          return value.indexOf(ele) === index;
         
      
//     });
//     console.log(UniqueValues);

//     // how to short and compare an array

//     const fruits =["orange","banana","apple","mango"];
//     fruits.sort();
//     console.log(fruits);
//     //or
//    let arrange= fruits.sort()
//     console.log(arrange);
//     //sort arrange the array in order

//     const number=[1,3,2,4,6,5,4,7,9,8]
//     number.sort();
//     console.log(number);

//     //for compare
//     //1.for ascending order

//     let sortednumber=number.sort((a,b)=>{
//     if(a>b){
//       return 1;
//     }
//     else if(b>a){
//       return -1;
//     }
//     });

//     console.log(sortednumber);

//     //2. for descending order

//     const arrangenumber= number.sort((a,b)=>{
//       if(a>b){
//          return -1;
//       }
//       else if(b>a){
//          return 1;
//       }
//     });
//     console.log(arrangenumber);

//     //important array method

//     //1.map method

//     const number1=[1,2,3,4,5,6]
//     let result= number1.map((curelem)=>curelem**2
      
//    );
//     console.log(result);

//     // using map method creating new array by capitalised each word

//     const words=["apple","mango","banana","orange"];
//     const result1= words.map((curelem)=>{
//       return curelem.toUpperCase()
//     })
//     console.log(result1);

//     // using map method,write a function that takes an array of names and returns a new array where each name 
//     // is prefixed with "Mr.".

//     const names= ["ram","sandeep","deepak","meenu","prashant"]
//     const prefixname=names.map((curelem)=>`Mr.${curelem}`);
//     console.log(prefixname);

//     //2.reduce method

//     //reduce method is used when we have multiple values and we want to data in single values
//     // for add to cart from flipkart we use reduce method for finding total amount

//     //ques1 write a javascript function that calculates the total price of items
//     //in a shopping cart.the function should take an array of item prices as input
//     //and return the total price.

    const productprice=[100,200,300,400,500];
     const totalprice=productprice.reduce((accum,curelem,index,arr)=>{
      return accum =accum+ curelem;
     },600);//if we want to add 600 in the total price then we can use this method and 600 is the initial value of accum
     console.log(totalprice);

     // converting 2d and 3d array into  one dimensionalarray

     const arr = [['zone1', 'zone2'], 
     ['zone3', 'zone4'], 
     ['zone5', 'zone6'],
    ['zone7', 'zone8']]

        const flattenArray = arr.reduce((accum, curelem) => {
            return accum.concat(curelem);
        })
        console.log(flattenArray);
        
     
     

//     //filter method 
//     //we have already done the filter method

//     // how to insert,add,replace and delete elements in array (crud)

//     //1.array.prototype.push()
//     // the push() method adds one or more elements to the
//     // end of an array and returns the new length of the array.

//     //const animals =["pigs","goat","sheep"];
//     // const count = animals.push("cow","dog","cats"); // give length of the array
//     //console.log(count);
//     //console.log(animals);
    

//     //2. array.prototype.unshift()
//     // the unshift() method adds one or more elements to the beginning of an array
//     // and returns the new length of the array.


//     const animals =["pigs","goat","sheep"];
//      const count = animals.unshift("cow","dog","cats"); // give length of the array
//     console.log(count);
//     console.log(animals);

//     const myNumbers = [1,2,3,5]
//     myNumbers.unshift(4,6)
//     console.log(myNumbers);
//     //console.log(myNumbers.unshift(4,6)); // this type of printing only give length

//     //3. array .prototype.pop()
//     //the pop() method removes the last element from an array and returns
//     //that element.this method changes the length of the array.

//     //const plants = ["brocoli","cauliflower","kale","tomato","cabbage"];
//     //console.log(plants);
//     //console.log(plants.pop());
//     //console.log(plants);

//     //4. array.prototype.shift()
//     //the shift() method removes the first element from an array and returns
//     // that removed element.this method changes the length of the array.

//     const plants = ["brocoli","cauliflower","kale","tomato","cabbage"];
//     console.log(plants);
//     console.log(plants.shift());
//     console.log(plants);

//     //5. array.prototype.splice()
//     // adds and/or removes elements from an array.

//     //ques 1. add dec at the end of an array?
//     //ques 2. what is the return value of splice method?
//       //ques 3. update march to  March(update)?
//       //ques 4. delete june from the array?

//      // sol1

//       const months = ["jan","march","april","june","july"];

//       const newmonth = months.splice(5,0,"dec");
//       //or
//       //const newmonth = months.splice(months.length,0,"dec");
//       //here 5 is the index no where we want to add the value and 0 is the no of elements we want to delete from that index no.
//       //console.log(newmonth);//it give empty array because we do not delete any value from the array.
//       console.log(months);

//       //sol2

//       console.log(newmonth);//it give empty array because we do not delete any value from the array.

//       //sol3

//       const months1 = ["jan","march","april","june","july"];
//       //const newmonth1 = months1.splice(1,1,"March");
//       //console.log(months1);
      
//      // or
//      const indexOfmonth = months1.indexOf("march");
//      if(indexOfmonth!== -1){
//       const update = months1.splice(indexOfmonth,1,"March");
//       console.log(months1);}//it give the updated value of march and delete the march from the array.}
//       else{
//          console.log("not found");
//       }
//       //it give the updated value of march and delete the march from the array.

//       //sol4.

//       const months2 = ["jan","march","april","june","july"];
//       const indexOfmonth1 = months2.indexOf("june");
//       if(indexOfmonth1!== -1){
//          const updatemonth =months2.splice(indexOfmonth1,1);
//          console.log(months2);
//       }
//       else{
//          console.log("not found");
//       }

//       //challenge time
//       //1. find the square root of each number in the array ?
      
//       let arr = [25,36,49,64,81];
//       let result2 = arr.map((curelem)=>{
//          return curelem**(1/2);

//       })
//       console.log(result2);

//       //2. multiply each element by 2  and return only those elements which are greater than 10?

//       let Arr = [2,3 ,4,6,8]
//       let result3 = Arr.map((curelem)=>{
//          return curelem*2;
//       })
//       let result4 = result3.filter((curelem)=>{
//          return curelem>10;
//       })
//       console.log(result3);
//       console.log(result4);
      
      

//       var abc=50;
//       for(var i=1;i<=abc;i++){
//          for(var j=1;j<=abc;j++){
//             if(i==j && i*j==abc){
//                console.log(i);
               
//             }
//          }
//       }

//       let arr1 = [1,2,3,40,5,6,7,8,9,10];
//       var key = 8;
//       for (var i=0; i<arr1.length; i++){
// switch(true){
// case arr1[i]===key:
// 	console.log(i);
// 	console.log(key*key);
// 	break;
// default:
// 	console.log("Value does not present")
// 	break;
// }
// }

let arr1 = [1, 2, 3, 40, 5, 6, 7, 8, 9, 10];
var key = 8;
// var found = false; // Flag to check if key is found

for (var i = 0; i < arr1.length; i++) {
    switch (true) {
        case arr1[i] === key:
            console.log(`Key found at index: ${i}`);
            console.log(`Square of key: ${key * key}`);
            // found = true; // Set flag to true if key is found
            break;
        default:
            break;
    }
    // if (found) {
    //     break; // Exit loop if key is found
    // }
}
      

      
      

    
    
    
    
    
    

    
    
    
    

    
    
    
    

   



   
    
    

    
    




























