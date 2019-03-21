
// autofocus on the email field
window.onload = function() {
  document.getElementById("email").focus();
};

//the function responsible to validate the email and password fields
function validate()
{
    if(   document.getElementById("email").value == "user@email.co.uk"
       && document.getElementById("myInput").value == "password" )
    {
        alert( "Logged successfully" );
        location.href="preload_signin.html";
    }
    else if (   document.getElementById("email").value == ""
       || document.getElementById("myInput").value == "" )
    {
        alert( "You need to fill all the fields" );
    }
    else{
      alert( "Account not existent!" );
    }
}

//makes password visible
function myFunction() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}