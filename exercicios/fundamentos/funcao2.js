//  Armazenando uma Função em uma Variável
const imprimirSoma = function (a, b){ //função sem nome
    console.log (a + b)
}

imprimirSoma (2, 3)

//  Armazenando uma Função Arrow em uma variável
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

//  Retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))

const imprimir = a => console.log(a)
imprimir('simples!')