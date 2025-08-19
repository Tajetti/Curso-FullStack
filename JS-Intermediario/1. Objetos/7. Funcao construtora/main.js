function criarProduto(nome, descricao) {
    const produto = {}

    produto.nome = nome,
    produto.descricao = descricao,
    produto.exibirProduto = function(){
        console.log(`Seu produto: ${this.nome} e a descrição do seu produto é: ${this.descricao}`)
    }

    return produto
}

const produto1 = new criarProduto("mouse", "Um aparelho eletronico")
produto1.exibirProduto()