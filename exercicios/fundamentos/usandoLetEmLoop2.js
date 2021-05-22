const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log (i)
    })
}

funcs [2] ()
funcs [8] ()
//declarando a variavel como let, podemos acessar todos os valores gerados no array