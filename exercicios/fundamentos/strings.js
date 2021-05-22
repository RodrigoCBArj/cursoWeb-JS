const escola = 'c0d3r'

console.log(escola.charAt(1)) //mostra o caractere na posição 1 (contagem cmeça com 0, 1, 2...)
console.log(escola.charAt(8)) //como ñ existe, retorna nada e ñ dá erro
console.log(escola.indexOf('d')) //mostra a posição do caractere na constante, caso exista

console.log(escola.substring(1)) //mostra a String a partir da posição 1
console.log(escola.substring(0, 3)) //mostra 3 caracteres da String, a partir da posição 0

console.log('Escola '.concat(escola).concat(' :P')) //String concatenando com uma Variavel e concat com outra String
console.log('Escola ' + (escola) + ' :P') //concatenar usando +
console.log(escola.replace(3, 'e')) //substitui o caractere na posição 3 pela String 'e'

console.log('Anna,Marta,Rodrigo'.split(',')) //divide a String nas ',' (virgulas) formando Arrays