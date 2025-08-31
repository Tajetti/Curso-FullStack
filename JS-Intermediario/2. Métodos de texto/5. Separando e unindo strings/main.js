let texto = "estudar, praticar, aprender, estressar, testar"
let separar = texto.split(",")
console.log(separar)
console.log(separar[3]) // estressar

let message = "estou aprendendo javascript"
let separarMessage = message.split("a")
console.log(separarMessage)

let juntar = separar.join(" - ")
console.log(juntar)

let testandoJoin = "testando esse texto aqui para saber como funciona o método join"
let separandoTexto = testandoJoin.split(" ")
console.log(separandoTexto)
let juntandoNovamente = separandoTexto.join(" - ")
console.log(juntandoNovamente)