const prod1 = {}
prod1.nome = 'Celular do carai'
prod1.preco = 5699.99
prod1['Desconto Arrasador'] = 0.40  //evitar atributos com espaço

console.log(prod1)

const prod2 = {     //outra forma de criar objetos
    nome: 'Camisa Polo',
    preco: 99.90,
    objeto: {       //objeto dentro de objeto
        x: 1,
        objeto: {
            x: 2
        }
    }
}
console.log(prod2)