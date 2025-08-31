let nomeLivro = document.getElementById("nomeLivro")
let anoLivro = document.getElementById("anoLivro")
let descLivro = document.getElementById("descricaoLivro")

function cadastrar(){
    if(nomeLivro.value == " " || anoLivro.value == " " || descLivro.value == " ") {
        alert("Preencha todos os campos")
    }
}