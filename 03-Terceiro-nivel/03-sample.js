async function buscarPlaneta(idPlaneta) {
    try {
        const resposta = await fetch(`https://swapi.dev/api/planets/${idPlaneta}/`);
        return await resposta.json();
    } catch (erro) {
        console.error("Erro ao buscar o planeta:", erro);
        throw erro; 
    }
}

function exibirDetalhesPlaneta(planeta) {
    const detalhesPlaneta = `
    Nome: ${planeta.name}
    Clima: ${planeta.climate}
    População: ${planeta.population}
    `;

    console.log("Detalhes do Planeta:");
    console.log(detalhesPlaneta);
}

function verificarPopulacaoPlaneta(planeta) {
    const populacao = parseInt(planeta.population);
    const populacaoMaximaPlanetaPequeno = 1000000;
    if (populacao > populacaoMaximaPlanetaPequeno) {
        console.log("Este planeta é muito populado.");
    } else {
        console.log("Este planeta tem uma população pequena.");
    }
}

async function exibirResultadoDaBusca(idPlaneta) {
    try {
        const planeta = await buscarPlaneta(idPlaneta);
        exibirDetalhesPlaneta(planeta);
        verificarPopulacaoPlaneta(planeta);
    } catch (erro) {
        console.error("Erro ao buscar ou detalhar o planeta:", erro);
    }
}

exibirResultadoDaBusca(1);

