//transition between log in and sign up pages
function signup()
{
    document.getElementById("left-box1").style.display = "block";
    document.getElementById("right-box1").style.display = "block";
    document.getElementById("left-box2").style.display = "none";
    document.getElementById("right-box2").style.display = "none";
    document.title = "Sign Up";
}
function login()
{
    document.getElementById("left-box1").style.display = "none";
    document.getElementById("right-box1").style.display = "none";
    document.getElementById("left-box2").style.display = "block";
    document.getElementById("right-box2").style.display = "block";
    document.title = "Log In";
}


//check passwords in signup form
function checkPassword() 
{
    var password = signupform.password1.value,
        confirmPassword = signupform.password2.value;

    if (password != confirmPassword) {
        document.getElementById("mismatch").style.display = "block";
        return false;
    }
    else {
        document.getElementById("mismatch").style.display = "none";
        return true;
    }
}