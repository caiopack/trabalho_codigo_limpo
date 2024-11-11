async function buscarEDetalharPlaneta(idPlaneta) {
    const LIMITE_POPULACAO_ALTA = 1000000; 

    try {
        const resposta = await fetch(`https://swapi.dev/api/planets/${idPlaneta}/`);
        const planeta = await resposta.json();

        const detalhesPlaneta = `
        Nome: ${planeta.name}
        Clima: ${planeta.climate}
        População: ${planeta.population}
        `;

        console.log("Detalhes do Planeta:");
        console.log(detalhesPlaneta);

        const populacao = parseInt(planeta.population);
        if (populacao > LIMITE_POPULACAO_ALTA) {
            console.log("Este planeta é muito populado.");
        } else {
            console.log("Este planeta tem uma população pequena.");
        }
    } catch (erro) {
        console.error("Erro ao buscar o planeta:", erro);
    }
}

buscarEDetalharPlaneta(1);
