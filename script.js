function login(){
    Username = document.getElementById("user").value;
    Password = document.getElementById("pass").value;
    
    if( Username == "Biswa" && Password == "Deep" )
    {
        console.log("Successful!!");
      window.location.href="login_success.html";
    }
    else
    {
        document.getElementById("lblerror").innerHTML="Please enter valid username and password";
        console.log("Unsuccesful!!");
    }

    

}