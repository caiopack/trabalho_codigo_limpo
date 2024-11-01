async function buscarEFiltrarPessoas() {
    try {
        const resposta = await fetch("https://swapi.dev/api/people/");
        const dados = await resposta.json();

        const pessoasComL = dados.results.filter(pessoa => pessoa.name.startsWith("L"));

        console.log("Pessoas cujo nome começa com L:");
        pessoasComL.forEach(pessoa => {
            console.log(pessoa.name);
        });

        console.log(`Total de pessoas encontradas: ${dados.results.length}`);

    } catch (erro) {
        console.error("Erro ao buscar pessoas:", erro);
    }
}

buscarEFiltrarPessoas();
