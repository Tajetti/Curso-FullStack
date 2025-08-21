const cartaoCredito = "1234567812344928"
console.log(cartaoCredito.length)

const ultimosDigitos = cartaoCredito.slice(-4) 
// ultimosDigitos = 4928 
console.log(ultimosDigitos)

let cartaoMascarado = ultimosDigitos.padStart(cartaoCredito.length, "X") // A gnt *adiciona* o comprimento do cartao de credito
// cartaoMascarado = xxxxxxxxxxxx4928
console.log(cartaoMascarado)

let inicioMascarado = ultimosDigitos.padEnd(cartaoCredito.length, "X")
// inicioMascarado = 4928xxxxxxxxxxxx
console.log(inicioMascarado)