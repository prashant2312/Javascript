//write a program  that works out whether if a given year is a leap year or not?

var year = 2020;
if(year%4===0)
    {if(year%100===0){
        if(year%400===0){
            console.log("this year"+year+" is a leap year");
        }
        else{
            console.log("thisyear"+year+" is not a leap year");
        }
        

    
    }else{
        console.log("this year"+year+" is a leap year");
    }
}else{
    console.log("this year "+year+"is not a leap year");
}

//what is truthy and falsy values in javascript?
//we have total 5 falsy values in javascript    
//0,"",undefined,null,NaN,false** is a falsy anyway

if(score=0){
    console.log(" omg,we loss the game");}//score=0 is a falsy value so else condolition will be executed
    else{
        console.log("yay,we won the game");
    }
    if(score=null){
        console.log(" omg,we loss the game");}
        //score=null is a falsy value so else condolition will be executed
        else{
            console.log("yay,we won the game");
        }
        
