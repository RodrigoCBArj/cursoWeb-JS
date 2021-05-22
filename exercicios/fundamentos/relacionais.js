console.log(' 1.', '1' == 1) //'1' é igual a 1? true. apenas compara os valore
console.log(' 2.', '1' === 1) //'1' é estritamente igual a 1? false. comparando também o tipo
console.log(' 3.', '5' != 5) //'5' é diferente de 5? false
console.log(' 4.', '5' !== 5) //'5' é estritamente diferente de 5? true

console.log(' 5.', 3 > 2)
console.log(' 6.', 3 < 2)
console.log(' 7.', 3 >= 2)
console.log(' 8.', 3 <= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log(' 9.', d1 === d2)
console.log('10.', d1 == d2)
console.log('11.', d1.getTime() === d2.getTime())

console.log('12.', undefined == null)
console.log('13.', undefined === null)