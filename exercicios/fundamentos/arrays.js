const valores = [7.7, 4.9, 8.6, 9.3]
console.log(valores[0], valores[3])
console.log(valores[4]) //n existe, mas n da erro

valores[4] = 'pode receber outros tipos' //embora n seja uma boa prática
console.log(valores)
console.log(valores.length) //mostra quantidade de elementos no array

valores.push({id: 3}, false, null, 'String') //.push adiciona mais itens no array
console.log(valores)

console.log(valores.pop()) //.pop remove o ultimo elemento do array
delete valores[0] //remove um item do array
console.log(valores)

console.log(typeof valores) //em js, array é um objeto