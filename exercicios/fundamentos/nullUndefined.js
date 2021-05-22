let valor //ñ definido
console.log(valor)

valor = null //ausencia de valor
console.log(valor)
//console.log(valor.toString())     *ERRO - n da pra acessar nada de uma variavel nula ou indefinida*

const produto = {}
console.log(produto)
console.log(produto.preco) //retorna undefined pq preco ñ está definido dentro do objeto vazio

produto.preco = 9.99
console.log(produto)

produto.preco = undefined //evitar atribuir undefined
console.log(!!produto.preco) //retorna false
//delete produto.preco      *forma correta de deletar um atributo do objeto*
console.log(produto)

produto.preco = null //sem preço
console.log(!!produto.preco) //retorna false
console.log(produto)