//  Função sem Retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) //ñ da erro mas ele soma com um undefined e resulta num NaN
imprimirSoma(2, 8, 4, 6, 8) //ñ da erro mas ele soma apenas os 2 primeiros
imprimirSoma() //ñ da erro mas retorna NaN (undefined + undefined)

//  Função com Retorno
function soma(a , b = 1) { //tendo b = 1 torna UM o valor padrão de b, caso não haja valor na chamada
    return a + b
}

console.log(soma (2, 3))
console.log(soma (2)) //2 + padrão (1) = 3
console.log(soma ()) //undefined + padrão (1) = NaN