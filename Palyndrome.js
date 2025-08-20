var num=121
var sum=0;
var r;
var temp=num;

while(num>0){
    r=num%10;
    sum=sum*10+r;
    num=Math.floor(num/10);
}

if(temp===sum){
    console.log("Palindrome number");
}
else{
    console.log("Not Palindrome number");
    
}

var num = 142
var sum = 0;
var r;
var temp=num;
while(num>0){
    r= num%10;
    sum= sum*10+r;
    num = Math.floor(num/10);
}
if(temp===sum){
    console.log("Palindrome number");
    
}
else{
    console.log("Not Palindrome number");
    
}