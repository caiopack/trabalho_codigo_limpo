async function buscarPlaneta() {
    const resposta = await fetch("https://swapi.dev/api/planets/1/");
    const planeta = await resposta.json();
<<<<<<< HEAD:04-Quarto nível/01-sample.js
    
    var exibirNomePlaneta = planeta.name;
    console.log(exibirNomePlaneta);
=======
    console.log(planeta.name);

    buscarPlaneta(planeta.name);
>>>>>>> 5abcccd6297cb7db61b439cf87f9acab17753a9a:04-Quarto-nivel/01-sample.js
}

buscarPlaneta();
