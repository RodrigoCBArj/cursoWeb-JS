let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1 
console.log(!!isAtivo)
/* ! funciona como negação (lógica), 
porém se usada 2 vezes ela não altera o "valor" da variável e o mostra como booleano
*/

console.log('Valores que irão funcionar como VERDADEIRO:')
console.log(!!7) //qualquer número real diferente de Zero
console.log(!!-2)
console.log(!!'texto') //String com algo dentro
console.log(!![]) //array
console.log(!!{}) //objeto
console.log(!!Infinity)
console.log(!!(isAtivo = "qualquer coisa que funcione como true")) //como é uma String com algo, retorna true

console.log('Valores que irão funcionar como FALSO:')
console.log(!!0)
console.log(!!'') //String VAZIA
console.log(!!null) //nulo
console.log(!!NaN) //not a number
console.log(!!undefined) //indefinido
console.log(!!(isAtivo = '')) //variável com qualquer coisa que funcione como false (ex string vazia)

console.log('Pra finalizar...')
console.log(!!('' || null || 'x' || 0)) //basta um item ser true para considerar como true
// || é ou (logica)

let nome = ''
console.log(nome || 'Desconhecido') //utiliza-se dessa forma para dar um valor padrão a alguma coisa
//dessa forma, caso a variavel nome não tenha valor nenhum, retorna 'Desconhecido'
nome = 'Rodrigo'
console.log(nome || 'Desconhecido')