const acesso = true;

function verificaAcesso(usuario) {
    if (acesso && usuario.isAdmin) {
        console.log("Acesso permitido ao administrador.");
    } else {
        console.log("Acesso negado.");
    }
}

const usuario = { nome: "João", admin: true };
verificaAcesso(usuario);
