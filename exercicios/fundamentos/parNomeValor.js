//par nome/valor
const saudacao = 'Opa' //Contexto lexico 1

function exec() {
    const saudacao = 'Dale' //contexto lexico 2
    return saudacao
}

//Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 91,
    endereco: {
        rua: 'Rua Isaac Salazar',
        numero: 70
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)