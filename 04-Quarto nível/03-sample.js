async function buscarDados() {
    const dados = "{ name: 'Luke', 'idade': 23 }";
    const personagem = JSON.parse(dados);
    console.log(personagem.name);
}

buscarDados();
