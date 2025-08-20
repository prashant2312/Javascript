var age =20;
if(age>=18)
    {
        console.log("you can vote");
        
    }
    else{
        console.log("you cannot vote");
        
    }
 // switch case

    var area = "triangle";
    pi=3.14; l=4;b=5;h=6;r=2
    switch(area)
    {
        case"circle":console.log("the area of circle is:" + pi*r*2);
        break;
        case"triangle":console.log("the area of triangle is:" + (1/2*b*h));
        break;
        case"rectangle": console.log("the area of rectangle is:" + l*b);
        break;
        default:
            console.log("please enter valid data");    
    }
   //loops

    var num = 5;
    while(num<=10)
    {console.log(num);
        num++;
    }

    var num = 15;
    do
    {
        console.log(num);
        num++;    
    
    }
    while(num<=20);

    var num = 0;
    for(num=1;num<=10;num++)
        {
            console.log(num);
            
        }
     // ternary operators
        var age = 15;
        console.log((age>=18)? "you can vote": "you cannot vote");
     // if, else if, else conditions
        var area = "square";
        pi=3.14,r=4,l=3,b=5,h=3,side=2;
        if(area=="circle"){
            console.log("area of circle is:" + pi*r*2);
            
        }
        else if(area=="square"){
            console.log("area of square is:" + side*2);
            
        }
        else{
            console.log("please enter valid area");
            
        }

        //function

       // function sum ()
        //{
           // var a=10;
           // var b=20;
            //var total=a+b;
            //console.log(total);
            
       // }
       // sum();

        //function expression
       // function remainder(a,b)
       // {
               // var c = a%b
                //console.log(c);
                
                
        //}
        //var funexp = remainder(10,6)

        //return keyword
        // function sum(a,b)
        // {return total= a+b}
        // var funexp = sum(2,4)
        // console.log(funexp);
         

        //anonymous functions

    // var funexp=  function(a,b)
    // {
       // return quotient = a/b;
    // }
    // var division = funexp(20,4)
        //console.log("quotient of two No is : " + division) ;

        //let,var,const
       // function biodata(){
        //var myFirstName = "bhawna";
       // console.log(myFirstName);
    
        
           // if(true){
           // var myLastName = "joshi";
           // console.log("inner"+myFirstName);
            //console.log("inner"+myLastName);
            
            
                
           // }
            // console.log("outer"+myLastName);
             
       // }
       // biodata();

        //function biodata(){
            //let myFirstName = "bhawna";
           // console.log(myFirstName);
            //if(true){
                //let myLastName = "joshi";
                //console.log(myLastName);
                //console.log("inner"+ myFirstName);
                
                
           // }
            //console.log("outer"+ myLastName);
            
        //}
        // biodata();

        //same as for const

        // const myAge = 20
        // console.log(myAge);
         //myAge = 17;
         //console.log(myAge);

         // temlate literals

         for(let num=1;num<=10;num++){
            let tableOf = 15
         
         console.log(`${tableOf}*${num}=${tableOf*num}`);}

         // default parameter

         function sum(a,b=5){
            return  a+b;
            
            
         }
         console.log(sum(4));

         //fat arrow function

         const mult=()=> `the product of two number is ${(a=3)*(b=4)}`;
         console.log(mult());
         
         //array

         var mycollegues = ["meenu","deepak","prashant","beenu","bholi","raghav"];
         console.log(mycollegues);
         console.log(mycollegues[2]);
         console.log(mycollegues.length);
         console.log(mycollegues[5]);
         for(i=0;i<mycollegues.length;i++){
            console.log(mycollegues[i]);
            
         }
         for(let element in mycollegues){
            console.log(element);
            
         }
         for(let element of mycollegues){
            console.log(element);
            
         }
         mycollegues.forEach(function(element,index,array)
        {console.log(element+" " + index  +":" + " " +array);
        

        })

        //fat arrow method

        mycollegues.forEach((element,index,array)=>{
            console.log(element+" "+index+":"+" "+array);
            
        })
         
        //searching and filter in array

        var myFreinds = ["bhawna","Meenu",20,"prashant","deepak",20]
        console.log(myFreinds.indexOf(20));
        console.log(myFreinds.lastIndexOf(20));
        console.log(myFreinds.includes(25));
        
        //filter method

        const numbers =[1,2,3,4,2,5,6,7,4,8];
        const result = numbers.find((curelem)=>{
            return curelem>2;

        })
        console.log(result);
        
        const result1 = numbers.map((curelem)=>{
            return curelem*2;
            
        })
        console.log(result1);
        
        const result2= result1.findIndex((curelem)=>{
            return curelem>6
        })
        console.log(result2);

        const result3 = numbers.filter((curelem)=>{
            return curelem<6 ;
        })
        console.log(result3);

       // ques1: user want to delete the value of 7
       let value=7
       let updatedcart = numbers.filter((curelem)=>{
        return curelem!= value
       })
       console.log(updatedcart);

       //ques2: given an array of products where each product has a name and a 
    // price, write a function that uses the filter method to return an array containing
    // only the products with a price less than or equal to 1000.

    const products = [
        {
            name:"laptop",price:2000
        },
        {name:"mobile",price:1000},
        {name:"television",price:500},
        {name:"tab",price:200}
    ]
    const filterProductsLists = products.filter((elem)=>elem.price<1000);
    console.log(filterProductsLists);

    const UniqueValues = numbers.filter((elem,index,value)=>{
        return value.indexOf(elem)=== index;
    })
    console.log(UniqueValues);

    ///write a program  that works out whether if a given year is a leap year or not?

    var year = 1978;
    if(year%4===0){
        if(year%100===0)
        {
           if(year%400===0)
           { console.log("this year"+year+"is a leap year");}
        else{console.log(
        "this year"+year+"is not a leap year")};
            
        }
        else{
            console.log("this year"+year+"is  a leap year");}}
        else{
            console.log("this year"+year+"is not a leap year");
            
        }

        var Year = 1980;
        if(Year%4===0){
            if(Year%100===0){
                    if(Year%400===0)
           { console.log("this year"+Year + "is a leap year");}
            else{console.log("this year"+Year+"is not a leap year")};}
            else{console.log("this year"+Year+"is  a leap year")};}
            else{console.log( "this year"+Year+"is not a leap year")};

            //truthy and falsy value
        
          //falsy value

            if(score=0){
                console.log("oh no! we lost the game");
                
            }
            else{console.log("yes we won the game");
            }
         // same for other falsy values

            //truthy value
           score= 101
            if(score>=100){
                console.log("yes we won the game");
                
            }
            else{"we lost the game"};

           // javascript program to print table for given number(9) using for loop
            //   
                var num = 1;
                var tableOf = 9
                for(num=1;num<=10;num++){
                    console.log( tableOf+" "+"*"+" "+num+" "+" ="+" "+tableOf*num);
                    

                }

                // armstrong number

                var num = 160;
                var sum = 0;
                var r;
                var temp = num;

                while(num>0){
                    r= num%10;
                    sum= sum+(r*r*r);
                    num= Math.floor(num/10);
                    
                }

                if(temp===sum){
                    console.log("it is armstrong number");
                    
                }
                else{console.log("it is not armstrong number");
                }
                
                
                    
            
            
            
        
        
        
    
                
                    
                
        
        
            
            
                
            
                
            
        
            
        
            
                
                
            
    

            
            
            
        
        

    
    

       
        
        
        
        
        
        
         
         
         
         
         
         
         
         
         
        


        
        

        
            
            
    
        
        
            
            
    
        
            
            
    
    