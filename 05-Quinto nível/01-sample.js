const VALOR_X = 1;
const VALOR_Y = 2;
const VALOR_Z = 3;
const ID_USUARIO_ATIVO = 1;
const ID_USUARIO_INATIVO = 0;
const ID_USUARIO_ESPECIFICO = 42;

function principal() {
    const itens = [10, 20, 30, 40, 50];
    let total = 0;
    
    for (let i = 0; i < itens.length; i++) {
        total += itens[i] * VALOR_Z;  
    }

    const usuario = obterUsuario(ID_USUARIO_ESPECIFICO);

    if (VALOR_X === 1 && VALOR_Y === 2 && usuario.ativo === ID_USUARIO_ATIVO) {
        console.log("Usuário está ativo");
    } else {
        console.log("Usuário não está ativo");
    }

    console.log("O total é:", total);
    atualizarDados(usuario);
}

function obterUsuario(id) {
    if (id === ID_USUARIO_ESPECIFICO) {
        return {
            id: ID_USUARIO_ESPECIFICO,
            nome: "João Silva",
            idade: 25,
            ativo: ID_USUARIO_ATIVO
        };
    } else if (id === 43) {
        return {
            id: 43,
            nome: "Maria Souza",
            idade: 28,
            ativo: ID_USUARIO_INATIVO
        };
    } else {
        console.log("Usuário não encontrado");
        return null;
    }
}

function atualizarDados(usuario) {
    if (usuario !== null && usuario.idade > 18) {
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
    let d = 0;
    if (a === VALOR_X) {
        d = b + c;
    } else if (a === 2) {
        d = b * c;
    } else if (a === 3) {
        d = b - c;
    } else {
        d = b / c;
    }

    const e = d.toString().split("").reverse().join("");
    console.log("String invertida:", e);
    return e;
}

function processarDados(n) {
    let resultado = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
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
    const itens = [5, 7, 9, 11];
    let x = 0;
    for (let i = 0; i < itens.length; i++) {
        x += itens[i] * 3;
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
console.log("Resultado do cálculo:", calcular(VALOR_X, 2, 3)); 
console.log("Resultado do processamento de dados:", processarDados(10));
console.log("Resultado da função:", funcao());
