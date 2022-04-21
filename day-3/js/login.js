var users = []
function register(){
   
    let userName = document.getElementById("userName").value
    let password = document.getElementById("password").value
    let email = document.getElementById("email").value
    let user = {
        "userName":userName,
        "password":password,
        "email":email
    }
    users.push(user)
    console.log("User is added");
    display()
}
function login(){
    let userName = document.getElementById("userName").value
    let password = document.getElementById("password").value
    let result = document.getElementById("result")
    if(userName === "Ram"&& password === "sita"){
        // result.innerHTML = "<h1>Login Valid </h1>"
        location.href = "welcome.html"
    }
    else{
        location.href = "index.html"
    }
    console.log("check validate");
}
function display(){
    console.log("Display Users");
    for(let i = 0;i<users.length;i++){
        console.log(`User Name = ${users[i].userName}`); 
    }
}
