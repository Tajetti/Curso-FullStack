let myarray = [
    "U",
    1234,
    true,
    function() {
        console.log("Olá, mundo!")
    },
    objeto = {
        email: "teste@gmail.com"
    }
]

console.log(myarray[0])
console.log(myarray[1])
console.log(myarray[2])
myarray[3]()
console.log(myarray[4].email)
