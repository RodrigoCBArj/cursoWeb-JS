//desestruturar arrays

const [a] = [10]
console.log(a)

const [n0 = 0, , n2 = 0, , n4 = 0, n5] = [34, 54, 4, 2]
console.log(n0, n2, n4, n5)

const [ , [ , nota]] = [[ , 8, 8], [9, 6, 8]]
console.log(nota)