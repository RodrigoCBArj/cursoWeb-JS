//desestruturar objetos

const pessoa = {
    nome: 'Anna',
    idade: 48,
    endereco: {
        rua: 'Rua Sei lá',
        numero: 34
    }
}
console.log(pessoa)

const { nome, idade } = pessoa //copiei os itens nome e idade do objeto pessoa, criando 2 novas variaveis
console.log(nome, idade)
//ou
const { nome: n, idade: i } = pessoa //atribuindo outros nomes para as variaveis copiadas do objeto
console.log(n, i)

//e se eu tentar copiar itens que não existem no objeto?
const { sobrenome, bemHumorado = true } = pessoa //=true atribui um valor padrão caso não exista valor
console.log(sobrenome, bemHumorado)

const { endereco: { rua, numero, cep } } = pessoa //para acessar atributos dentro de atributos/objetos
console.log(rua, numero, cep) //cep n existe - retorna undefined

//se tentarmos acessar um atributo que n exite dentro que outro atributo que n existe dá erro
const { conta: { ag, cpf } } = pessoa
console.log(ag, cpf) //erro