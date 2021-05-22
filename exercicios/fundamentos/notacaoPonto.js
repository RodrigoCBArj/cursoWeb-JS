//exemplos para mostrar a variedade de uso do ponto ( . )
console.log(Math.ceil (6.3)) //arredonda para cima

const obj1 = {}

obj1.nome = 'Bola' //acessa itens dentro dos objetos
//obj1['nome] = 'Bola2'     *outra forma de declarar novos itens pro objeto* *iria sobrescrever o itens da linha 5*
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function () {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Sapato')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()