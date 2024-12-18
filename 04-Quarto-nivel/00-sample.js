async function buscarPersonagem() {   
    
    const personagem = "lucas lindo";
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = "";

    const id = document.getElementById("personagemId").value;

    if (!id || id <= 0) {
        mostrarErro("ID inválido. Insira um número positivo.", "danger");
    }

    try {
        const resposta = await fetch(`https://swapi.dev/api/people/${id}/`);

        if (!resposta.ok) {
            throw new Error("Personagem não encontrado. Verifique o ID e tente novamente.");
        }
        mostrarResultado(personagem);
        

    } catch (erro) {
        mostrarErro(erro.message, "danger");
    }
}

function mostrarErro(mensagem, tipo) {
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = `<div class="alert alert-${tipo}" role="alert">${mensagem}</div>`;
}

function mostrarResultado(personagem) {
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = `
      <div class="alert alert-success" role="alert">
        <strong>Nome:</strong> ${personagem.name}<br>
        <strong>Altura:</strong> ${personagem.height} cm<br>
        <strong>Peso:</strong> ${personagem.mass} kg
      </div>`;
}

buscarPersonagem();
