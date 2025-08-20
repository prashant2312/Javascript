//math object in javascript
//the javascript math object allows you to perform mathematical tasks on numbers.

//1.Math.pi
console.log(Math.PI);

//2.Math.round() method
//The Math.round() method returns the value of a number rounded to the nearest integer.

let num = 10.4567;
console.log(Math.round(num)); //10

//3.Math.pow() method
//The Math.pow() method returns the value of x to the power of y (xy).

console.log(Math.pow(2, 3)); //8
console.log(2**3); //8

//4.Math.sqrt() method
//The Math.sqrt() method returns the square root of a number.

console.log(Math.sqrt(25));
console.log(Math.sqrt(66)); 

//5.Math.abs() method
//The Math.abs() method returns the absolute (positive) value of a number.

console.log(Math.abs(-4.7)); //4.7
console.log(Math.abs(4.7)); //4.7
console.log(Math.abs(497-499)); 

//6.Math.ceil() method
//The Math.ceil() method returns the value of x rounded up to its nearest integer.

console.log(Math.ceil(4.4)); //5
console.log(Math.round(4.4)); //4

//7.Math.floor() method

//The Math.floor() method returns the value of x rounded down to its nearest integer.
console.log(Math.floor(4.7)); //4
console.log(Math.floor(99.1)); //99

//8.Math.min() method
//The Math.min() method returns the number with the lowest value.

console.log(Math.min(0, 150, 30, 20, -8, -200)); //-200

//9.Math.max() method
//The Math.max() method returns the number with the highest value.

console.log(Math.max(0, 150, 30, 20, -8, -200)); //150

//10.Math.random() method
//The Math.random() method returns a random number between 0 (inclusive), and 1 (exclusive).

console.log(Math.floor(Math.random()*10)); //0.123456789

//11.Math.trunc() method
//The Math.trunc() method returns the integer part of a number (new in ES6).

console.log(Math.trunc(4.9)); //4
console.log(Math.trunc(-99.1)); //-99

//practice time

//if the argument is a positive number,Math.trunc() is equivalent to Math.floor().
//if the argument is a negative number,Math.trunc() is equivalent to Math.ceil().

console.log(Math.trunc(4.9)); //4
console.log(Math.trunc(-4.9)); //-4








