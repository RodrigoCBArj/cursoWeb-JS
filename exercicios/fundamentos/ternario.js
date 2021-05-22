//  OPERADOR TERNARIO

const resultado = nota => nota>= 7 ? 'Aprovado' : 'Reprovado'
/*operador é composto por 3 partes:
* 1. a espressão seguido de um ?
* 2. o primeiro resultado seguido de um :
* 3. o segundo resultado
*/

console.log(resultado(7.1))
console.log(resultado(6.7))

/* essa mesma função pode ser escrita dessa forma: 
    const resultado = nota => {
        return nota>= 7 ? 'Aprovado' : 'Reprovado'
    }
*/