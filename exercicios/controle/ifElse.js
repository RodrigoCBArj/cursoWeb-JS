const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado!!')
    } else {
        console.log('Reprovado!!')
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Dale') //cuidado com a tipagem fraca do JS *n da erro*