const nome = 'Rafaella'
const concatenacao = 'Olá ' + nome + '!'

const template = `
    Olá
    ${nome}!`//considera as quebras de linha
console.log(concatenacao, template)

//expressões:
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei, ${up('cuidado')}!!`)