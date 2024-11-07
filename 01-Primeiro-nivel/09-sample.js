class Gestor {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const idade = 40;
const pessoa = new Gestor("Lucas", idade);

console.log(pessoa);
