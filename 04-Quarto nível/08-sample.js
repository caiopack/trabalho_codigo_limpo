async function buscarPlanetaRecursivo(id) {
    const resposta = await fetch(`https://swapi.dev/api/planets/${id}/`);
    const planeta = await resposta.json();

    console.log(planeta.name);

    buscarPlanetaRecursivo(id + 1);
}

buscarPlanetaRecursivo(1);
