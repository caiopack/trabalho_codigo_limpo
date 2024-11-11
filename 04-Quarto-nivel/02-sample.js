async function buscarFilme() {
    const resposta = await fetch("https://swapi.dev/api/films/1/");
    const filme = await resposta.json();

    console.log(filme.titulo.toUpperCase());
}

buscarFilme();
