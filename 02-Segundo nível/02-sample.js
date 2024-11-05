const maioridade = 18;
const idade = 16;

function verificarSePodeDirigir(idade) {
    if (idade >= maioridade) {
        return "Pode dirigir";
    } else {
        return "Não pode dirigir";
    }
}

console.log(verificarSePodeDirigir(idade));
