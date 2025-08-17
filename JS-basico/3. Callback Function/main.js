function executar(nomeTarefa, funcao) {
    return 'Executando a tarefa: ' + nomeTarefa
    funcao()
}

function funcao(){
    return 'Finalizado!!'
}

executar('Download de um arquivo!', funcao)

executar('Upload do arquivo', function(){
    console.log('Testando função de callback com uma função anonima')
})

executar('Removendo arquivo', () => {
    console.log("Arquivo excluido")
})

executar("Salvando arquivo", () => console.log('Arquivo salvo!') )