async function buscarNave() {
    const respostaApi = await fetch("https://swapi.dev/api/starships/9/");
    return await respostaApi.json();    
}


function detalhesDaNave(nave) {
    return `
        Nome: ${nave.name}
        Modelo: ${nave.model}
        Fabricante: ${nave.manufacturer}
    `;
}


function classificarTamanhoDaNave(nave) {
    const tamanhoTripulacao = parseInt(nave.crew);
    const tripulacaoNavePequena = 100;
    if (tamanhoTripulacao > tripulacaoNavePequena) {
        return "Esta é uma nave grande.";
    } else {
        return "Esta é uma nave pequena";
    }
}

async function exibirResultadoDaBusca() {
    try {
        const pesquisarNave = await buscarNave(); 
        const detalhesFornecidos = detalhesDaNave(pesquisarNave); 
        const tamanhoDaNave = classificarTamanhoDaNave(pesquisarNave);  

        console.log("Detalhes da Nave:");
        console.log(detalhesFornecidos);
        console.log(tamanhoDaNave);

    } catch (erro) {
        console.error("Erro ao buscar detalhes da nave:", erro);  
    }
}

exibirResultadoDaBusca();  
