//usando arrays

function rand ([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40])) //o if da função faz entender que o 40 é ominimo e o 50 é o max
console.log(rand([990])) //passando só o valor min
console.log(rand([ , 10])) //passando só a segunda declaração e assumindo o valor padrão da primeira
console.log(rand([ ]))  //array vazio, assume valores padrões
//console.log(rand()) //ñ passar array gera erro