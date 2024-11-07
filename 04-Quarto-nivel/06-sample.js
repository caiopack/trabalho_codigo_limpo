async function buscarNave(id) {
    const resposta = await fetch(`https://swapi.dev/api/starships/${id}/`);
    const nave = await resposta.json();
    console.log(nave);
}
const idnave = 10;

buscarNave(idnave);
