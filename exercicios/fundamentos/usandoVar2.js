var numero = 1
{
    var numero = 2
    console.log('dentro:', numero)
}
console.log('fora:', numero)
/*como a segunda declaração da variavel estava no escopo global 
(dentro de um bloco, mas fora de funcções),
a variavel numero foi sobrescrevida*/