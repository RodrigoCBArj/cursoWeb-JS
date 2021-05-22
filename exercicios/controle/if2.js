function teste1 (num) {
    if (num > 7)
        console.log(num)
        console.log('end')
}   //se n definir um bloco, o if só considera a primeira linha abaixo

teste1(6)
teste1(8)

function teste2 (num) {
    if(num > 7); {  //cuidado com o ';'. Não usar com estruturas de controle
        console.log(num)
    }
}   //nesse caso, como o ';' finalizou o if, só foi considerado o print sem nenhuma validação

teste2(7)
teste2(9)