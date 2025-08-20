//1.DOM
//the DOM is the Document Object Model,which deals with the structure of the HTML document
//e.g. document and all traversal you would do in it,events etc.

//for ex:
//change the background color to red
// document.body.style.backgroundColor = "red";

//2.BOM
//the BOM is the Browser Object Model, which deals with the browser components
//aside from the document, like history, location, navigator, screen 
//(as well as some others that vary by browser).or
// in simple meaning all the window operations which comes under BOM are 
//performed using BOM

// practical on history object

function goback(){
        window.history.back();
}


//functions alert/confirm/prompt are also a part of BOM:
//they are directly not related to the document object model
//but represent pure browser methods of communicating with the user.

var name="prashant";
var name1= 'prashant';
var name2=`prashant`;

//  alert(location.href);
// if(confirm("Do you want to go to amazon.com?")){
//         location.href=`https://www.bing.com/search?q=amazon&gs_lcrp=EgRlZGdlKgcIABBFGMIDMgcIABBFGMIDMgcIARBFGMIDMgcIAhBFGMIDMgcIAxBFGMIDMgcIBBBFGMIDMgcIBRBFGMIDMgcIBhBFGMIDMgcIBxBFGMID0gELMTAzNDI5MmowajSoAgiwAgE&FORM=ANAB01&PC=HCTS`;
// }


// alert("Hello! I am an alert box!");

// function Submit(event) {
//     event.preventDefault();
//     var name = document.getElementById("a").value;
//     var email = document.getElementById("b").value;
//     var val=confirm("Are you sure you want to submit the form?");
//     if (val == true) {
//         alert("Form submitted successfully!");
//         //database me store karne ke liye

//         document.getElementById("demo").innerHTML = "Name: " + name + "<br>Email: " + email;
//     } else {
//         alert("Form submission cancelled.");
//     }
// }




//var name=prompt("Enter your name");
//var email=prompt("Enter your email");

        //      document.getElementById("demo").innerHTML = "Name: " + name + "<br>Email: " + email;

 
 3.// window  has methods, properties and objects.
 // ex setTimeout(), setInterval ()are the methods 
 // where as  document is the object of the window and
 // it also has a screen object with properties describing the physical display.
 // example of window object properties are
 // innerWidth, innerHeight. 
 
 // Navigation through dom

 //1. document.documentElement
 // returns the root element of the document//html
//2. document.body
//3. document.head
//4. document.body.childNodes(include tab,enter and whitespace)
// list of the direct children only
//5. document.children(without text nodes,only regular elements)
//6.document.childNodes.length

//ques1. elements has childnodes or not

// ans = we will use document.body.hasChildNodes() method

// practice time
//1. how to find the child in dom tree

//ans. 1.firstChild // text
//2. firstElementChild// div main class
//3. lastChild//text
//4. lastElementChild//script
//5. const data= document.body.firstElementChild.firstElementChild;//undefined
//data// div class- first
//data.style.color="red";

//6. const data = document.querySelector(".child-two")// if we direct want to change in color of second child
//data.style.color="red";

//2. how to find parentnodes

// ans 1. document.body.parentNode//html
// ans 2. document.body.parentElement//html

//3. how to find siblings
// ans 1. document.body.previousSibling//text
// ans 2. document.body.previousElementSibling//head
// ans 3. document.body.nextSibling//text
// ans 4. document.body.nextElementSibling// null

// how to search the elements and references

// document.getElementById("id").innerHTML= "welcome to bhawna website".

 const changecontent = ()=>{
//         document.getElementById("heading").innerHTML = "Welcome to my website";
//         document.getElementById("heading").style.color = "red";
// for(let i in  document.getElementsByClassName("para")){
//         document.getElementsByClassName("para")[i].style.color="red";}
}
//changecontent();

// by  tag name

//document.getElementsByTagName("h1")[0].style.color="red";

//by name

//console.log(document.getElementsByName("gender"));




// we can directly write
        
//const changecontent = ()=>{
        
       // document.getElementById("heading").innerHTML = "Welcome to my website";}
        


// by taking reference of id we will  chang the content of h1 tag

//const changecontent = ()=>{
        //const headingchange= document.getElementById("heading");
        //headingchange.innerHTML = "Welcome to my website";}



// Now the same we have is the query selector
// querySelector returns the first matching value whereas
// querySelectorAll returns all the matching value

document.querySelector("#heading").innerHTML= "i changed my website name";

//or by classname

document.querySelector(".para").innerHTML= "i changed my website name";//it only change in first para class

//querySelectorAll
console.log(document.querySelectorAll(".para"));//it tells only the number of elements which name para class


// interview question
//1. what is the difference between getElementById and querySelector

//ans what is getElementById()?
// syntax:
// element=document.getElementById(id);
// returns a reference to the element by its id.
// if the element with  the specified id is not found, it returns null.

// what is querySelector()?
// syntax:
// element=document.querySelector(selectors);
// returns the first element that matches a specified group of  selector(s) in the document.
// if no matches are found, it returns null.

// difference=> if we want to get the html content of that element which has no id it means which have classname 
// then we cannot use getElementById() method
// but we can use querySelector() method.

//similarities=> both are used to select the elements in the document and give same output.

// but the difference is that getElementById() is used to select the element by id
// and querySelector() is used to select the element by class name or tag name or id


