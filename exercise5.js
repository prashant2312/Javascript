//javascript program to print table for given number(8,9,12,15) using for loop
//table of 8

var num = 1;
for(var num=1;num<=10;num++)
   { var tableof=8;
    console.log( tableof+"*"+num+"="+tableof*num);

}

//table of 15
var num=1;
for(var num =1;num<=10;num++)
    {   var tableof=15;
        console.log(tableof+"*"+num+"="+tableof*num);
        

}

//2. what is the difference between function parameters and function arguments?
//function parameters are the names listed in the function definition
//function arguments are the real values passed to the function

function sum(a,b)//a,b are the parameters
{
    var total=a+b;
    console.log(total);
}
sum();//no arguments=undefined
sum(20,30);//20,30 are the arguments
sum(40,50);//40,50 are the arguments