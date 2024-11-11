async function buscarPessoas() {
    try {
        const resposta = await fetch("https://swapi.dev/api/people/");
        const dados = await resposta.json();
        return dados.results; 
    } catch (erro) {
        console.error("Erro ao buscar pessoas:", erro);
        return []; 
    }
}

function filtrarPessoasComL(pessoas) {
    return pessoas.filter(pessoa => pessoa.name.startsWith("L"));
}

async function ExibirResultado() {
    const pessoas = await buscarPessoas();
    const pessoasComL = filtrarPessoasComL(pessoas);

    console.log("Pessoas cujo nome começa com L:");
    pessoasComL.forEach(pessoa => {
        console.log(pessoa.name);
    });

    console.log(`Total de pessoas encontradas: ${pessoas.length}`);
}

ExibirResultado();
