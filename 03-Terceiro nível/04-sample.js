async function buscarPersonagemENave(idPersonagem) {
    try {
        const respostaPersonagem = await fetch(`https://swapi.dev/api/people/${idPersonagem}/`);
        const personagem = await respostaPersonagem.json();

        if (personagem.starships.length > 0) {
            const respostaNave = await fetch(personagem.starships[0]);
            const nave = await respostaNave.json();

            const tripulacao = parseInt(nave.crew);
            if (tripulacao > 100) {
                console.log(`A nave ${nave.name} é considerada grande com ${tripulacao} tripulantes.`);
            } else {
                console.log(`A nave ${nave.name} é pequena com ${tripulacao} tripulantes.`);
            }
        } else {
            console.log(`${personagem.name} não possui naves registradas.`);
        }

    } catch (erro) {
        console.error("Erro ao buscar o personagem ou sua nave:", erro);
    }
}

buscarPersonagemENave(1);
