async function buscarPersonagem(id) {
    const url = encodeURIComponent(`https://swapi.dev/api/people/${id}/%%%`);
    const resposta = await fetch(url);
    const personagem = await resposta.json();
    console.log(personagem.name);
}

const lukeId = 1;
buscarPersonagem(lukeId);
