function validateData(){
    var name = document.getElementById("name");
    var date = document.getElementById("dateinput");
    var month = document.getElementById("monthinput");
    var yearSelect = document.getElementById("yearinput");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var valid = false;
    
    if(name.value==""){
        document.getElementById("errorMsg").innerHTML="Enter  Name";
        return false;
    }
    else if(name.value.length<=5){
        document.getElementById("errorMsg").innerHTML="Name must be at least 6 characters";
        return false;
    }
    else if(date.value==""){
        document.getElementById("errorMsg").innerHTML="Enter Date";
        return false;
    }
    else if(email.value==""){
        document.getElementById("errorMsg").innerHTML="Enter Email";
        return false;
    }
    else if(password.value==""){
        document.getElementById("errorMsg").innerHTML="Enter Password";
        return false;
    }
    else if(password.value.length<6){
        document.getElementById("errorMsg").innerHTML="Password must be at least 6 characters";
        return false;
    }
    else if(yearSelect.value==""){
        document.getElementById("errorMsg").innerHTML="Enter Year";
        return false;
    }
    else if(Number(date.value)<=0 || Number(date.value)>31){
        document.getElementById("errorMsg").innerHTML="There is no date "+Number(date.value);
        return false;
    }
    else if(Number(month.value)>0 && Number(month.value)<8){
        if(Number(month.value)%2==0 && Number(date.value)>30){
            document.getElementById("errorMsg").innerHTML="There is no date "+Number(date.value)+" that month";
            return false;
        }    
    }
    else if(Number(month.value)>7 && Number(month.value)<13){
        if(Number(month.value)%2==1 && Number(date.value)>30){
            document.getElementById("errorMsg").innerHTML="There is no date "+Number(date.value)+" that month";
            return false;
        }    
    }
    else if(Number(month.value)==time.getMonth() && yearSelect.value==time.getFullYear()){
        if(Number(date.value)>time.getDate()){
            document.getElementById("errorMsg").innerHTML="Invalid Date";
            return false;  
        }   
    }
    if(yearSelect.value%4!=0 ){
        if(Number(month.value)==2&& Number(date.value)>28){
            document.getElementById("errorMsg").innerHTML="There is no date "+date.value+" that month in "+yearSelect.value;
            return false; 
        } 
    }
    

    if(document.getElementById("agree").checked){
        valid=true;
    }

    if(valid){
        window.location.href="homepage.html";
        alert("Registration successful. Welcome, "+name.value+month.value%2);
    }else{
        alert("Please check the box");
        return false;
    }
    
}