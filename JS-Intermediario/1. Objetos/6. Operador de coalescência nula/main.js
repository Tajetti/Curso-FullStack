let content = null
console.log(content ?? "é nulo!")

const user = {
    name: "Alvaro",
    age: 18,
    address: {
        street: "Rua x",
        cep: "123123-123"
    }
}
console.log(user["address"] ?? "Não há endereço cadastrado!")