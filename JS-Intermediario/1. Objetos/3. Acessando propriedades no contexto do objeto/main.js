const product = {
    name: "caixa de algodão",
    price: 145,
    message: function(){ // Arrow function não funciona ;-;
        console.log(`Seu produto: ${this.name}`)
    }
}

const user = {
    name: "teste",
    email:"talhettialvaro@gmail....",
    message: function(){
        console.log(`Olá! ${this.name}`) // This só funciona no escopo da função
        console.log(`Seu email: ${this.email}`)
    },
}

user.message()
product.message()