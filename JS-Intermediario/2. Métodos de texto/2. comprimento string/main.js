let username = document.getElementById("username")
let password = document.getElementById("password")
let btnLogin = document.getElementById("login")

btnLogin.addEventListener("click", (event) => {
    event.preventDefault()
    passwordValue = password.value
    if(passwordValue.length <= 3){
        alert("Faça uma seja maior")
        password.value = ""
    } else {
        alert("Ok!")
    }
})