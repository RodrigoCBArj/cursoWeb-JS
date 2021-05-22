function imprimirPalavraGritando(obj) {
    try {   //tenta rodar o codigo
        console.log(obj.name.toUppercase() + "!!!")
    } catch (e) {   //se der erro, cai no catch
        tratarErroELancar (e)
    } finally { //se colocar o finally, sempre vai rodar (se der erro ou não)
        console.log('final')
    }
}

const obj = { nome: 'Rodrigo'}
imprimirPalavraGritando(obj)

function tratarErroELancar (erro) {
    // throw new Error('complicou')
    // throw 10
    // throw false
    // throw 'Mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}