const user = { //objeto pessoa
    name: {
        first_name: "Alvaro",
        last_name: "Tajetti",
    },
    age: 18,
    email: "talhettialvaro@gmail.com",
    message: function(){
        console.log("Olá mundo!")
    },
}

// Quero acessar propriedades do objeto
console.log(user.name.first_name)
console.log(user.email)
user.message()

//notação de colchetes
console.log(user["email"])
console.log(user["name"]["first_name"])
user["message"]()