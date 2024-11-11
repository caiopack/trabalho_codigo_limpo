<<<<<<< HEAD:04-Quarto nível/06-sample.js
const ID_NAVE = 10; // Defina o ID da nave em uma constante, em vez de usar um número mágico diretamente

async function buscarNave(id) {
    try {
        const resposta = await fetch(`https://swapi.dev/api/starships/${id}/`);

        if (!resposta.ok) {
            throw new Error(`Nave não encontrada com o ID ${id}`);
        }

        const nave = await resposta.json();
        const nomeNave = nave.name;

        console.log(nomeNave);
    } catch (erro) {
        console.error("Erro ao buscar a nave:", erro.message);
    }
=======
async function buscarNave(id) {
    const resposta = await fetch(`https://swapi.dev/api/starships/${id}/`);
    const nave = await resposta.json();
    console.log(nave);
>>>>>>> 5abcccd6297cb7db61b439cf87f9acab17753a9a:04-Quarto-nivel/06-sample.js
}
const idnave = 10;

<<<<<<< HEAD:04-Quarto nível/06-sample.js
buscarNave(ID_NAVE); 
=======
buscarNave(idnave);
>>>>>>> 5abcccd6297cb7db61b439cf87f9acab17753a9a:04-Quarto-nivel/06-sample.js
