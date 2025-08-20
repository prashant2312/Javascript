//string properties

//length: returns the length of the string(number of characters).

const str = "hello,world!";
console.log(str.length);

// Escape character

// code    result      description
// \'       '           single quote
//\"        "           double quote
//\\        \           backslash

//if we want to add single quote(') in paragraph then we use single (\) before single quote
//if we want to add double quote(") in paragraph then we use single(\)before double quote
//if we want to a line of paragraph in next line then we use \n
//if we want to a backslash then we add double backslash.

let text = "my name is \'bhawna joshi\' & \n i am a \"full stack\" \\developer.";
console.log(text);

//string search methods

//1.indexOf

//indexOf()  method returns the index of the first occurence of a string in a string,
//or it returns -1 if the string is not found.

let Name = "bhawna joshi";
console.log(Name.indexOf("joshi"));// indexof return the index of only word j

//for converting string into array

let strarr = Array.from(Name);
//console.log(strarr);
let strmap = strarr.map((curelem,index)=> `${curelem} - ${index}`);
console.log(strmap);

//2.lastindexof()

//let para = "hello javascript, welcome to our world best javascript course";
//let index = para.lastIndexOf("javascript")
//let index = para.lastIndexOf("javascript",40);//check the lastindexof from best word so from here text is read from baest world 
//it means first javascript become last javascript
//console.log(index);

//search method()//search method also give index and also not use for giving the position value ex. 40

//let para = "hello javascript, welcome to our world best javascript course";
//let result = para.search(/javaScript/i);// i word and slash is used for ignoring the case sensitive it means it ignore that word s is small or big 
//it print the same value
//console.log(result);

// 3.match(): returns an array of matched values or null if no match is found.

//let para = "hello javascript, welcome to our world best javascript course";
 //let result= para.match("javaScript");//match method give null value in case of case sensitive here s is not match with para.
 //console.log(result);
 //let result= para.match(/javaScript/gi);//here g means global flag and match method also can give the array of repititive string values
 //by putting g and it also ignored case sensitive condition by putting i and slash.
 //console.log(result);

 //4. matchall()

 //let para = "hello javascript, welcome to our world best javascript course";
// let result= para.matchAll("javascript");//return empty iterator in case sensitive condition or normal case
 //console.log(result);

 //match method also add the g flag at the end by using iterator or forof loop and give the repititive value with their index

 //console.log(...result); ... is a spread operator it is used in case of epty iterator

 //for(let item of result ){
    //console.log(item[0]);//if we want only first value that is javascript not its index and input if we want second element
    //of array it means index then we put 1 in repalce of 0.
    
// }//forof loop also can use in case of empty iterator
 
 //5.includes() ,give true or false

 //let para = "hello javascript, welcome to our world best javascript course";
 //let includesresult= para.includes("Java");//it is case sensitive and give false value
 //console.log(includesresult); // regular expression that is i does not use in includes method 
 
//6. startswith() give true or false value

//let para = "hello javascript, welcome to our world best javascript course";
//let result= para.startsWith("java");
//console.log(result);//check the first letter of para

//7.endswith()

//let para = "hello javascript, welcome to our world best javascript course";
//let result = para.endsWith("welcome");//give false because it ends with course
//console.log(result);

//extracting string parts:

//1. slice() extract a part of a string and returns the extracted part in a new string.
//slice() extracts up to but not including indexend.

//let para = "hello javascript, welcome to our world best javascript course";
//let result= para.slice(6,20);//here 6 is the index no.//if only starting index value is given then it takes the whole para.
//console.log(result);//6 is the starting index value and 20 is the last value but it conut the index value till 19.

//2.substring: extract a portion of the string based on starting and ending indices.
//* camelcase is used to seperste words, substring is not to be intended as sub String but as substring.
//it is same as slice method. the difference is that start and end values less than 0 are treated as 0 in substring().

//let para = "hello javascript, welcome to our world best javascript course";
//let result= para.substring(-6);//it treated -6 as 0 index no.
//let result= para.slice(-6)//slice method count from ending in cse of minus(-) values.
//console.log(result);

// interview questions

//1. what is the output for the following case?

//let para = "hello javascript, welcome to our world best javascript course";
//let result = para.slice(1)
//or
//let result= para.substring(1)
//or
//let result=para.replace("h","")
//console.log(result);

//3.replace() and replace all()

//let para = "hello javascript, welcome to our world best javascript course";
//let result= para.replace("javascript","bhawna")//replace method replace only one value
//let result= para.replaceAll("javascript","bhawna") //replace all replace all value of same string but it does not work
//console.log(result);

//extracting string characters

//1.charAt(position)method: the charAt() method returns the character at a specified index(position)in a string

//let para = "hello javascript, welcome to our world best javascript course";
//let result= para.charAt(18);
//let result=para.charAt(-6);//minus index value give empty string.
//console.log(result);

//2.charCodeAt(): the charCodeAt()method returns the unicode of the character at a specified index in a string.
//the method returns a UTF- 16 code(an integer between 0 and 65535).

//let para = "hello javascript, welcome to our world best javascript course";
//let result = para.charCodeAt(6);// j is come in 6 index value and the code value of j is 106.
//console.log(result);

// return the unicode of the  last character in a string.
let para = "hello javascript, welcome to our world best javascript course";
let res = para.charCodeAt(para.length-1);//length-1 is used to get the last character of string.
console.log(res);


//3.at() at method also allows the use of negative indexes while charAt()do not.

//let para = "hello javascript, welcome to our world best javascript course";
let result= para.at(-4);//in negative case it starts with ending.
console.log(result);

//other methods

//1.trim: removes whitespace from both ends of the string.
const strn = "  hello, world!   ";//trim do not remove the space between string.
console.log(strn.length);

let strtrim = strn.trim();
console.log(strtrim.length);

//2. split: splits the string into an array of substrings based on a specified delimiter.

const fruits= "apple,mango, banana";
let strnarr= fruits.split(",").reverse().join() //reverse method change the direction of array and join method converts array into string.
console.log(strnarr);//split means remove

// concat() method : joins two or more strings together and returns a new string.

let str1 = "hello";
let str2 = "world";
console.log(str1.concat(" ", str2));
console.log(str1+str2);//it is also used to join two strings.
console.log(`${str1} ${str2}`);//it is also used to join two strings.



//property access
//ECMAScript 5 (2009)allows property access[] on strings.

var strnn = "hello world!";
console.log(strnn[0]);//it is same as charAt method



// interview questions

//1. write a javascript function that prints the letters'a' through 'z' in the console. you should use a loop
//to iterate through the letters and print each one on a new line.

console.log("a".charCodeAt(0));
console.log("z".charCodeAt(0));



for(let char =97;char <=122;char++)
{
    console.log(String.fromCharCode(char));
    
}

 //2. write a function  to count the number of vowels in a string?

 const countvowels = (str)=>{
        const vowels = "aeiou";
        let count = 0;
     
      for(let char of str){
        if(vowels.includes(char)){
             count++;
        }}
        return count;
      }
    
     console.log(countvowels("my name is bhawna joshi"));
     






 //3. write a function to check if all the vowels presents in a string or not?
 
 
//  const checkAllVowelsPresentOrNot = (str)=>{
//     const vowels = "aeiou";
 
//  for(let char of vowels){
//     if(!str.includes(char)){
//         return false
//     }}
//     return true;
//  }

 //console.log(checkAllVowelsPresentOrNot("my name is bhawna joshi"));

 //4.write a javascript function to check if the given string is pangarm (includes all alphabets) or not?

 const pangarmchecker = (str)=>{
  let inputarr = str.toLowerCase().split("");
  //console.log(inputarr);
  const values = inputarr.filter((curelem)=>
   curelem.charCodeAt()>= "a".charCodeAt()&&
  curelem.charCodeAt()<= "z".charCodeAt());

  //return new Set (values).size ===26 // generally in case of new set method size method is used
  
   return [...new Set(values)].length === 26; //  incase of array length method is used and ... means spread operator
   //which is used to print alphabets in horizontal way

  
  

 }
 console.log(pangarmchecker("the quick brown fox jumps over the lazy dog"));
 
 


















 


 
 








