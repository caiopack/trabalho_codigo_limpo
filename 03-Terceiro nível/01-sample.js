async function buscarEDetalharNave() {
    const LIMITE_TAMANHO_TRIPULACAO_GRANDE = 100;

    try {
        const resposta = await fetch("https://swapi.dev/api/starships/9/");
        const nave = await resposta.json();

        const detalhesNave = `
        Nome: ${nave.name}
        Modelo: ${nave.model}
        Fabricante: ${nave.manufacturer}
        `;

        console.log("Detalhes da Nave:");
        console.log(detalhesNave);

        const tamanhoTripulacao = parseInt(nave.crew);
        if (tamanhoTripulacao > LIMITE_TAMANHO_TRIPULACAO_GRANDE) {
            console.log("Esta é uma nave grande.");
        } else {
            console.log("Esta é uma nave pequena.");
        }

    } catch (erro) {
        console.error("Erro ao buscar detalhes da nave:", erro);
    }
}

buscarEDetalharNave();
