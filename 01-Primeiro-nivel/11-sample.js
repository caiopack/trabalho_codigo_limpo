const numeroMaximoDeTentativas = 4;
const indiceUsuario1 = 0;
const indiceUsuario2 = 1;
const indiceUsuario3 = 2;
const indiceUsuario4 = 3;

const data = { ano: 2015, mes: 1, dia: 25 };

class Usuario {
    constructor(dadosDaPessoa, dadosDoUsuarioNoSistema, infomarcoesDeLogin) {
        this.nome = dadosDaPessoa.nome;
        this.idade = dadosDaPessoa.idade;
        this.funcaoNoSistema = dadosDaPessoa.funcaoNoSistema;
        this.dataDeCriacaoDoUsuario = dadosDoUsuarioNoSistema.dataDeCriacaoDoUsuario;
        this.dataDoLoginRecente = infomarcoesDeLogin.dataDoLoginRecente;
        this.usuarioAtivo = dadosDoUsuarioNoSistema.usuarioAtivo;
        this.quantidadeDeTentativasDeLogin = infomarcoesDeLogin.quantidadeDeTentativasDeLogin;
    }

    verificaUsuarioAtivo() {
        if (this.usuarioAtivo) {
            console.log("Ativo");
        } else {
            console.log("Inativo");
        }
    }

    verificaLiberdadeDeAcesso() {
        if (this.funcaoNoSistema === "admin") {
            console.log("Admin pode acessar todas as áreas.");
        } else {
            console.log("Convidado tem acesso limitado.");
        }
    }
}

// Função para verificar o número de administradores
function contarAdmins(usuarios) {
    let admsPresentesNoSistema = 0;
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].funcaoNoSistema === "admin") {
            admsPresentesNoSistema++;
        }
    }
    return admsPresentesNoSistema;
}

// Função para verificar se o número de tentativas de login é excessivo
function verificarTentativasDeLogin(usuario, numeroMaximoDeTentativas) {
    if (usuario.quantidadeDeTentativasDeLogin > numeroMaximoDeTentativas) {
        console.log("Tentativas de login excessivas.");
    } else {
        console.log("Tentativas de login sob controle.");
    }
}

// Função para verificar qual usuário logou mais recentemente
function verificarUsuarioLogadoRecentemente(usuario1, usuario2) {
    if (usuario1.dataDoLoginRecente > usuario2.dataDoLoginRecente) {
        return `${usuario1.nome} logou mais recentemente.`;
    } else {
        return `${usuario2.nome} logou mais recentemente.`;
    }
}

// Função para verificar se o usuário foi criado recentemente
function verificarUsuarioNovato(usuario) {
    const hoje = new Date();
    const umAnoMs = 31536000000;
    if ((hoje - usuario.dataDeCriacaoDoUsuario) < umAnoMs) {
        console.log("Usuário criado recentemente.");
    } else {
        console.log("Usuário antigo.");
    }
}

const usuarios = [
    new Usuario(
        { nome: "Carlos", idade: 25, funcaoNoSistema: "admin" },
        { dataDeCriacaoDoUsuario: new Date(data,{ ano: 2015, mes: 1, dia: 25 }), usuarioAtivo: true },
        { dataDoLoginRecente: new Date(data,{ ano: 2024, mes: 8, dia: 1 }), quantidadeDeTentativasDeLogin: 2 }
    ),
    new Usuario(
        { nome: "Ana", idade: 30, funcaoNoSistema: "guest" },
        { dataDeCriacaoDoUsuario: new Date(data,{ ano: 2020, mes: 4, dia: 22 }), usuarioAtivo: true },
        { dataDoLoginRecente: new Date(data,{ ano: 2024, mes: 7, dia: 31 }), quantidadeDeTentativasDeLogin: 3 }
    ),
    new Usuario(
        { nome: "José", idade: 29, funcaoNoSistema: "admin" },
        { dataDeCriacaoDoUsuario: new Date(data,{ ano: 2022, mes: 10, dia: 5 }), usuarioAtivo: false },
        { dataDoLoginRecente: new Date(data,{ ano: 2024, mes: 6, dia: 10 }), quantidadeDeTentativasDeLogin: 5 }
    ),
    new Usuario(
        { nome: "Maria", idade: 35, funcaoNoSistema: "guest" },
        { dataDeCriacaoDoUsuario: new Date(data,{ ano: 2021, mes: 2, dia: 10 }), usuarioAtivo: false },
        { dataDoLoginRecente: new Date(data,{ ano: 2023, mes: 12, dia: 25 }), quantidadeDeTentativasDeLogin: 7 }
    )
];

usuarios.forEach((usuario) => {
    verificarTentativasDeLogin(usuario, numeroMaximoDeTentativas);
    verificarUsuarioNovato(usuario);
});

console.log(`Usuários admin: ${contarAdmins(usuarios)}`);

usuarios[indiceUsuario1].verificaUsuarioAtivo();
usuarios[indiceUsuario2].verificaLiberdadeDeAcesso();
verificarTentativasDeLogin(usuarios[indiceUsuario3], numeroMaximoDeTentativas);

const resultLogadoRecentemente = verificarUsuarioLogadoRecentemente(usuarios[indiceUsuario1], usuarios[indiceUsuario3]);
console.log(resultLogadoRecentemente);
verificarUsuarioNovato(usuarios[indiceUsuario4]);
