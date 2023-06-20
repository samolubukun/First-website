function auth(){
    
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="BHU/21/04/05/0038"&& password=="123456")
{
    alert("Login Successful!");
    window.location.assign("welcome.html");
    return false;

}

if(username=="cmp205"&& password=="123456")
{
    alert("Login Successful!");
    window.location.assign("welcome.html");
    return false;
}
else
{
    alert("Login Failed!");
}


}