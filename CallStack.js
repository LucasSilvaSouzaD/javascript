
function idade(idade) {
    console.log(idade)

}

function nome(nome) {
    idade(19)
    console.log(nome)
    
}


function pessoa() {
    nome("lucas")
    console.log("Chamando a primeira pessoa")
}

pessoa()

// é uma pilha de chamadas que utiliza o método LIFO para execução, podendo armazenar em sua memoria dados primitivos