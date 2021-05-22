var numero = 1 //var tem escopo de função e de global
{
    let numero = 2  /*let tem escopo de bloco, função e global, então se a variavel for let
                    e tiver dentro de um bloco, ela primeiro procura dentro do bloco, função e depois global */
    console.log('dentro =', numero)
}
console.log('fora =', numero)