function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log('Aprovado com nota ' + nota);
    }
}

soBoaNoticia(8.4);
soBoaNoticia(6.5);

function seForVerdadeEuFalo(valor) {
    if (valor) {    
        /*  nesse caso, como não tem nenhum relacional (validador), por padrão, o valor recebido 
        é transformado para boolean e passa apenas se for true  */
        console.log('É verdade: ' + valor);
    }
}

seForVerdadeEuFalo() //passando nada, envia undefined que é false
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 3])
seForVerdadeEuFalo({})