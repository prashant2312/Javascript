// Events in javascript

// HTML events are things that happen to HTML elements.
// When JavaScript is used in HTML pages, JavaScript can "react" on these events.
//an html event can be something the browser does, or something a user does.

// examples of html events:

// an html web page has finished loading
// an html input field was changed
// an html button was clicked 
// often, when events happen, you may want to do something.

// javascript lets you execute code when events are detected.

// HTML allows event handler attributes, with JavaScript code, to be added to HTML elements.

// 4 ways of writing events in javascript

//1. using  inline events alert();
//2. by calling a function;
//3.using Inline events (Html onclick="" property and element.onclick)

// const thirdway = document.getElementById("demo");
    // thirdway.onclick = function() {
    //     alert("Hello! I am an alert box!");}
    // ye method sirf ek hi event ko add karne ki suvidha deta hai.

//4. using Event listeners (addEventListener() method and IE's attachEvent() method)

// const fourthway = document.querySelector("#demo");
// fourthway.addEventListener("click", ()=> {
//     alert("Hello! I am an alert box!");})

// function ke andar function ko pass karna call back function kehlata hai. 
// yha pr addevenlistener  jo ki ek function hai uske andar function ko pass kiya gaya hai.
// ye method multiple event listeners ko add karne ki suvidha deta hai.

// what is event object?
// Event object is the parent object of the event object.
// for example, mouseevent, keyboard event, focus event, etc.

// MouseEvent in Javascript
// MouseEvent is an event that occurs when the mouse is moved, clicked, or scrolled.
// events that occur when the mouse interacts with the HTML document belongs
// to the MouseEvent object.
 
