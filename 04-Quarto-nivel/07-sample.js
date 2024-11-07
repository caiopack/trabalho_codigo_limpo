async function buscarEspecie() {
    const resposta = await fetch("https://swapi.dev/api/species/1/");
    const especie = await resposta.json();

    console.log(especie.average_lifespan.toUpperCase());
}

buscarEspecie();
