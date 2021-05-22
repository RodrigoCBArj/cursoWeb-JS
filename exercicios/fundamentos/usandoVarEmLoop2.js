const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log (i)
    })
}

funcs [2] ()
funcs [8] ()
//ambos mostra 10 por causa da variavel ter sido declarada como var