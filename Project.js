//First create form that will take fname, mname, lname, email, password, age
//submit button iT will ask user whther he wants to submit the form or not
//1>if yes then show alert.
//2>If user age is less than 18 then show alert that you are not eligible to register
//3>if user age is greater than 18 then show alert that you are eligible to register
//4>if user age is greater than 18 show the date clock
//5> show otp 

function submitform(event){
    event.preventDefault();
    var first= document.getElementById("a").value;
    var middle=document.getElementById("b").value;
    var last=document.getElementById("c").value;
    var email=document.getElementById("d").value;
    var password=document.getElementById("e").value;
    var age=document.getElementById("f").value;
    var vol=confirm("are you want to submit the form or not");
    if(vol==true){
        if(age>=18){
            alert("you are  eligible to register")
            document.getElementById("demo").innerHTML="first name:"+first+"<br>middle name:"+middle+"<br>last name:"+last+"<br>email:"+email+"<br>password:"+password+"<br>age:"+age;
            setInterval(()=>{
                var date = new Date().toUTCString();
                document.getElementById("demo1").innerHTML=date;
                
            },1000);
        }
        else{
            alert("you are not eligible to register")
        }
    }
    else{
        alert("form submission cancelled")
    }
    document.getElementById("demo2").innerHTML="your otp is:"+" "+Math.floor(Math.random()*1000000);}











    

