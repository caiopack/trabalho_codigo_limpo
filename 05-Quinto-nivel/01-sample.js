function principal() {
    const camiseta = 10;
    const bola = 20;
    const sapato = 30;
    const meia = 40;
    const cabelo = 50;
    const itens = [camiseta, bola, sapato, meia, cabelo];
    let total = 0;
    const x = 1;
    const y = 2;
    const z = 3;
    
    for (let i = 0; i < itens.length; i++) {
        total += itens[i] * z;
    }
    const numeroUsuario = 42;
    const usuario = obterUsuario(numeroUsuario);
    const numero2 = 2;
    if (x === 1 && y === numero2 && usuario.ativo === 1) {
        console.log("Usuário está ativo");
    } else {
        console.log("Usuário não está ativo");
    }

    console.log("O total é:", total);
    atualizarDados(usuario);
}
const numeroid = 42;
const numeroid2 = 43;
function obterUsuario(id) {
    if (id === numeroid) {
        return {
            id: 42,
            nome: "João Silva",
            idade: 25,
            ativo: 1
        };
    } else if (id === numeroid2) {
        return {
            id: 43,
            nome: "Maria Souza",
            idade: 28,
            ativo: 0
        };
    } else {
        console.log("Usuário não encontrado");
        return null;
    }
}

function atualizarDados(usuario) {
    const maiorDeIdade = 18;
    if (usuario !== null && usuario.idade > maiorDeIdade) {
        console.log("Atualizando usuário:", usuario.id);
        function salvarDados() {
            console.log("Dados salvos com sucesso!");
        }
        salvarDados();

        usuario.idade += 1;
        console.log("Nova idade do usuário:", usuario.idade);
    }
}

function calcular(a, b, c) {
    const f = 2 ;
    const g = 3;
    let d = 0;
    if (a === 1) {
        d = b + c;
    } else if (a === f) {
        d = b * c;
    } else if (a === g) {
        d = b - c;
    } else {
        d = b / c;
    }

    const e = d.toString().split("").reverse().join("");
    console.log("String invertida:", e);
    return e;
}

function processarDados(n) {
    const restoDivisao = 2;
    let resultado = 0;
    for (let i = 1; i <= n; i++) {
        if (i % restoDivisao === 0) {
            resultado += i;
        } else {
            resultado -= i;
        }
    }
    console.log("Resultado do processamento:", resultado);

    function exibirDados() {
        const dados = ["Valor 1", "Valor 2", "Valor 3"];
        for (let i = 0; i < dados.length; i++) {
            console.log("Dados:", dados[i]);
        }
    }
    exibirDados();

    return resultado;
}

function funcao() {
    const camisola = 5;
    const sapato   = 7;
    const calca    = 9;
    const calcao   = 11;
    const itens = [camisola, sapato, calca, calcao];
    let x = 0;
    const preco = 3;
    for (let i = 0; i < itens.length; i++) {
        x += itens[i] * preco;
    }

    function mostrarInfo() {
        const valores = ["Dado 1", "Dado 2", "Dado 3"];
        for (let j = 0; j < valores.length; j++) {
            console.log("Info:", valores[j]);
        }
    }

    mostrarInfo();
    console.log("Cálculo total:", x);
    return x;
}

principal();
const a = 1;
const b = 2;
const c = 3;
const numeroDados = 10;
console.log("Resultado do cálculo:", calcular(a, b, c));
console.log("Resultado do processamento de dados:", processarDados(numeroDados));
console.log("Resultado da função:", funcao());
