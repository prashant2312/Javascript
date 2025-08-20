// var num=153;

// var sum=0;
// var r;

// var temp=num;
// while(num>0){
    // r=num%10;
    // sum=sum+(r*r*r);
    // num=Math.floor(num/10);
// }

// if(temp===sum){
    // console.log("Armstrong number");
// }
// else{
    // console.log("Not Armstrong number");
    
// }
var num = 153;
var sum = 0;
var r;
var temp = num
 
while(num>0)
    {
        r= num%10;
        sum = sum+r*r*r;
        num = Math.floor(num/10);
        
    }

    if(temp===sum)
    {
        console.log("Armstrong number");
    }
else{
    console.log("not armstrong number");
    
}