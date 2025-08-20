//functions in javascript
//function is a block of code that performs a specific task
//fuction functionName()
//{statement}

//var a=10;
//var b=20;
//var sum=a+b;
//console.log(sum);
//byb using function

//function sum()
//{
   // var a=10;
    //var b=20;
    //var total =a+b;
    
    //console.log(total); 
//}
//sum();


//function expressions
//"funnction expressions simply means create a function and put it into a variable"
function sum(a,b)
{
   var total=a+b;
   console.log(total);
}
var funexp=sum(10,20);  





 //Return Keyword
 //when javascript reaches a return statement, the function will stop executing
 //functions often compute a return value
    //the return value is "returned" back to the "caller"

    function sum(a,b)
    {return total= a+b;

    }
    var funexp=sum(10,20);
      console.log(funexp);

      //anonymous function
      //a funvction expression is similar to and has the same syntax as a function declaration one can define "named" 
      //function expressions (where the name of the expression might be used in the call stack for example) or "anonymous" function expressions
      varfunexp=function(a,b)
      {
          return total=a+b;
      }
      var sum=funexp(10,20);
      console.log("the sum of two no is+sum");
      


