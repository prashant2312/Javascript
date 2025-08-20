//if..else statement

var tomr = "rain";
if (tomr == "rain") {
    console.log("take an umbrella");//if true then this statement will be executed
}
else{console.log("no need totake umbrella")};//if false then this statement will be executed

//conditional (ternary) operator
//the conditional operator is the only javascript operator that takes three operands

//variablename = (condition) ? value1 : value2
//value1(if true) value2(if false)
//short version of if..else statement
var age = 17;
//(age>=18)?console.log("you can vote"):console.log("you can not vote");
//or
console.log((age>=18)?"you can vote":"you can not vote");

//if..else if..else statement
var area = "circle";
var PI = 3.14,l=5,b=10,h=10,r=5;
if (area == "circle") {
    console.log("area of circle is:"+ PI*r*2);
}else if(area == "rectangle"){
    console.log("area of rectangle is:"+ l*b);}
else if(area == "triangle"){
    console.log("area of triangle is:"+ (1/2*b*h));}
else{
    console.log("please enter valid area");
}

//switch statement
var area = "triangle";
var PI = 3.14,l=5,b=10,h=10,r=5;
switch(area){
    case "circle":
        console.log("area of circle is:"+ PI*r*2);
        break;
    case "rectangle":
        console.log("area of rectangle is:"+ l*b);
        break;
    case "triangle":
        console.log("area of triangle is:"+ (1/2*b*h));
        break;
    default:
        console.log("please enter valid area");
}
//while loop statement
var num = 0;
while(num<=10){
    console.log(num);//infinite loop
    num++;
    //block scope
}
//do..while loop statement
var num=20;
do{
    console.log(num);num++;
}while(num<=10);

//for loop statement
//for(initializer;condition;iteration){
    //code to be executed}
    var num =0;
    for(num=0;num<=10;num++){
        console.log(num);
    }
    

