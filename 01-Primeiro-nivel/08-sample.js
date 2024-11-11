const pessoa = { nome: "Maria", idade: 28 };
const maioridade = 18;

function verificaMaioridade(pessoa) {
    return pessoa.idade >= maioridade;
}

console.log(verificaMaioridade(pessoa));
