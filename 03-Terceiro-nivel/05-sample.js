async function buscarVeiculos() {
    try {
        const retorno = await fetch("https://swapi.dev/api/vehicles/");
        const informacoes = await retorno.json();
        return informacoes.results; 
    } catch (erro) {
        console.error("Erro ao buscar veículos:", erro);
        throw erro; 
    }
}

function filtrarVeiculodeRico(veiculos, limite) {
    return veiculos.filter(veiculo => parseInt(veiculo.cost_in_credits) > limite);
}

function exibirVeiculoDeRico(veiculosCaros) {
    console.log("Veículos caros (mais de 10.000 créditos):");
    veiculosCaros.forEach(veiculo => {
        console.log(`- ${veiculo.name}: ${veiculo.cost_in_credits} créditos`);
    });
}

function calcularTudo(veiculosCaros) {
    return veiculosCaros.reduce((total, veiculo) => {
        return total + parseInt(veiculo.cost_in_credits);
    }, 0);
}

async function buscarVeiculo() {
    try {
        const veiculos = await buscarVeiculos();
        const limite = 10000;
        
        const veiculosCaros = filtrarVeiculodeRico(veiculos, limite);
        exibirVeiculoDeRico(veiculosCaros);
        
        const custoTotal = calcularTudo(veiculosCaros);
        console.log(`Custo total dos veículos caros: ${custoTotal} créditos`);

    } catch (erro) {
        console.error("Erro ao buscar ou processar os veículos:", erro);
    }
}

buscarVeiculo();
