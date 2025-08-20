// creating date object
// there are 4 ways to create date object

//new Date(); 
//new Date(year,month,Day,hours,minutes,seconds,miliseconds); // YYYY-MM-DD format
//new Date(milliseconds); 
//we cannot avoid month section
//new Date(date string); // YYYY-MM-DDTHH:mm:ss.sssZ format

//1.new date()
//date objects are created using the new date() constructor.

let currdate = new Date(); // current date and time
console.log(currdate);
//or
console.log(new Date()); 
console.log(new Date().toLocaleString()); //10/05/2025, 4:04:o7 PM
console.log(new Date().toString()); // sat may 10 2025 16:05:50 GMT+0530 (India Standard Time)
// //this is the perfect timing

//Date.now()
//returns the numeric value corresponding to the current time -the number 
// of milliseconds since January 1, 1970, 00:00:00 UTC.

console.log(Date.now()); 
// 1683700000000

//2.new Date(year, month, day, hours, minutes, seconds, milliseconds)
//note: javascript counts months from 0 to 11. January is 0. December is 11.

var d = new Date(2025, 4, 10, 16, 16 , 50, 0); //may is 4
console.log(d.toLocaleString()); //10/05/2025, 4:16:50 PM

//3.new Date(date string)

var d = new Date("may 10, 2025 16:23:00"); 
console.log(d.toLocaleString()); 

//4.new Date(milliseconds);
var d = new Date(1683700000000); //milliseconds since 1970
console.log(d.toLocaleString()); // tell time and date according to milliseconds since 1970
var d = new Date(0); //milliseconds since 1970
console.log(d.toLocaleString()); // 1/1/1970, 5:30:00 AM

// dates method

const curdate = new Date(); 

//how to get only date from date object

console.log(curdate.toLocaleString());
console.log(curdate.getFullYear()); //2025
console.log(curdate.getMonth()); //4 //may is 4
console.log(curdate.getDate()); //10 //10 is the date of month
console.log(curdate.getDay()); //6 //0 is sunday, 1 is monday, 2 is tuesday, 3 is wednesday,
//  4 is thursday, 5 is friday, 6 is saturday

// how to set the individual date

console.log(curdate.setFullYear(2024)); //2024
console.log(curdate.setMonth(4)); //4 //may is 4
console.log(curdate.setDate(10)); //10 //10 is the date of month);
console.log(curdate.setDate(0)); //0 is the last date of previous month
let setmonth = curdate.setFullYear(2025, 4, 10); //2025
console.log(setmonth);

// time method

const curtime = new Date();

// how to get only time from date object
console.log(curtime.getTime()); //returns the number of milliseconds since January 1, 1970, 00:00:00 UTC.
console.log(curtime.getHours()); //16
console.log(curtime.getMinutes()); //23
console.log(curtime.getSeconds()); //0
console.log(curtime.getMilliseconds()); //0

// how to set the individual time

console.log(curtime.setHours(16)); //16
console.log(curtime.setMinutes(23)); //23
console.log(curtime.setSeconds(0)); //0
console.log(curtime.setMilliseconds(0)); //

//practice time
new Date().toLocaleDateString(); //10/5/2025
new Date().toLocaleTimeString(); //4:23:00 PM
new Date().toLocaleString(); //10/5/2025, 4:23:00 PM

function myFunction() {
    
// setInterval(function() {
//     var t = new Date();
//     document.getElementById("demo").innerHTML = t;
//     //api call me


// },1000);



}
//function ke type
// var a=()=>{}
// var b=function(){}
// function c(){}

var d=function(){
    var t=new Date().toTimeString();
    document.getElementById("demo").innerHTML = t;
}

//setinterval= do argumant lega 1. Function 2. time in milliseconds this is a function which execute after every n second
// setInterval(d,2000)


// settimeout= do argumant lega 1. Function 2. time in milliseconds this is a function which execute after n second and after execution it stop
setTimeout(d,2000)



     
    


















 



