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
}

buscarNave(ID_NAVE); 
