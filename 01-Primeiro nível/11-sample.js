const numeroMaximoDeTentativas= 4;

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
        { dataDeCriacaoDoUsuario: new Date(2023, 1, 15), usuarioAtivo: true },
        { dataDoLoginRecente: new Date(2024, 8, 1), quantidadeDeTentativasDeLogin: 2 }
    ),
    new Usuario(
        { nome: "Ana", idade: 30, funcaoNoSistema: "guest" },
        { dataDeCriacaoDoUsuario: new Date(2020, 4, 22), usuarioAtivo: true },
        { dataDoLoginRecente: new Date(2024, 7, 31), quantidadeDeTentativasDeLogin: 3 }
    ),
    new Usuario(
        { nome: "José", idade: 29, funcaoNoSistema: "admin" },
        { dataDeCriacaoDoUsuario: new Date(2022, 10, 5), usuarioAtivo: false },
        { dataDoLoginRecente: new Date(2024, 6, 10), quantidadeDeTentativasDeLogin: 5 }
    ),
    new Usuario(
        { nome: "Maria", idade: 35, funcaoNoSistema: "guest" },
        { dataDeCriacaoDoUsuario: new Date(2021, 2, 10), usuarioAtivo: false },
        { dataDoLoginRecente: new Date(2023, 12, 25), quantidadeDeTentativasDeLogin: 7 }
    )
];


console.log(`Usuários admin: ${contarAdmins(usuarios)}`);

usuarios[0].verificaUsuarioAtivo();

usuarios[1].verificaLiberdadeDeAcesso();

verificarTentativasDeLogin(usuarios[2], numeroMaximoDeTentativas);

console.log(verificarUsuarioLogadoRecentemente(usuarios[0], usuarios[3]));

verificarUsuarioNovato(usuarios[3]);
