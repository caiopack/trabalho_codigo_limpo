async function buscarPlaneta() {
    const resposta = await fetch("https://swapi.dev/api/planets/1/");
    const planeta = await resposta.json();
    
    var exibirNomePlaneta = planeta.name;
    console.log(exibirNomePlaneta);
}

buscarPlaneta();
