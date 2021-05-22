//OPERADORES LOGICOS

function compras (trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) //bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete //operador unário

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log('true true:', compras(true, true))
console.log('true false:', compras(true, false))
console.log('false true:', compras(false, true))
console.log('false false:', compras(false, false))