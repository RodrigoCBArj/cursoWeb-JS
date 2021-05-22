//usando objetos

function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40 }
console.log(rand(obj)) //passei o objeto acima com intervalo de 40 a 50
console.log(rand({ min: 980 })) //passei um objeto apenas com valor minimo
console.log(rand({})) //passei objeto vazio que assume os valores padões (0 a 1000)
//console.log(rand()) //dá erro caso n passemos nenhum objeto