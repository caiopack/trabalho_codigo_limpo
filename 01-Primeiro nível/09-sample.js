class Gestor {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const IDADE = 40;

const pessoa = new Gestor("Lucas", IDADE);

console.log(pessoa);
