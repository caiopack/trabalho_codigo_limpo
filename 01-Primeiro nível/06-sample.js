const nomeDoUsuario = "Pedro";
const idadeDoUsuario = 25;
const usuarioAtivo = true;

function verificaStatusDeAtividadeDoUsuario(nomeDoUsuario, idadeDoUsuario, usuarioAtivo) {
    if (usuarioAtivo) {
        console.log(`${nomeDoUsuario  } tem ${  idadeDoUsuario  } anos e está ativo.`);
    } else {
        console.log(`${nomeDoUsuario  } está inativo.`);
    }
}

verificaStatusDeAtividadeDoUsuario(nomeDoUsuario, idadeDoUsuario, usuarioAtivo);
