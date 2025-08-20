//let vs var vs const
//var is a function scope, let and const are block scope

//var myName = "John";
//console.log(myName);//John
//myName = "bhawna";
//console.log(myName);//bhawna



//let myName = "John";
//console.log(myName);//John
//myName = "bhawna";
//console.log(myName);//bhawna

//const myName = "John";
//console.log(myName);//John
//myName = "bhawna";
//console.log(myName);//error

//var is function scope

 //function biodata(){
   // var myFirstName = "bhawna";  
    //console.log(myFirstName);
   // if(true){
       // var myLastName = "sharma";
        //console.log("inner "+myFirstName);
       // console.log("inner "+myLastName);
   // }
    //console.log("innerouter "+myLastName);
 //}
  // biodata();

    function biodata(){
        let myFirstName = "bhawna";  
        console.log(myFirstName);
        if(true){
            let myLastName = "sharma";
            console.log("inner "+myFirstName);
            console.log("inner "+myLastName);
        }
       //console.log("innerouter "+myLastName);//error because let is block scope and this console is outside the block of if condition and it is child of function parent class
     }
        biodata();
        //same for const and give same error

        // 2 temlate literals

        for(let num=1;num<=10;num++){
            let tableOf=12;
            //console.log(`${tableOf} * ${num} = ${tableOf*num}`);
            
            
        }

        //3 default parameter

        function mult(a,b=5){
            return a*b;//if we pass value of only one parameter name a then we will take default value of b
        }
        console.log(mult(5));//25

        //fat arrow function
        //console.log((sum));

        //function sum(){
           // let a=10;b=20;
           // let sum=a+b;
            //return ` the sum of two no is ${sum}`;
       // }
    
//convert this function into fat arrow function

//const sum =()=>{
   // let a=10;b=20;
    //let sum=a+b;
    //return ` the sum of two no is ${sum}`;
//}
//console.log(sum());//in arrow function we have to use const keyword to define function
// fuction is called after defining it in arrow function

//or

const sum =()=> ` the sum of two no is ${(a=5)+(b=6)}`;
console.log(sum());//this is actual fat arrow function





