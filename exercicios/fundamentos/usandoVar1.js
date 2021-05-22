{
    {
        {
            {
                var sera = 'Será??'
            }
        }
    }
}
console.log(sera) //ou seja, qualquer variavel dentro de qualquer bloco será visível e utilizavel

function teste() {
    var local = 'x, y, z'
    console.log(local)  //dentro de uma função as variaveis são visíveis
}
teste()
//console.log(local)  //fora de funções as variaveis não são visíveis (erro)