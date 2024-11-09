async function buscarPersonagem(idPersonagem) {
    try {
        const respostaPersonagem = await fetch(`https://swapi.dev/api/people/${idPersonagem}/`);
        const personagem = await respostaPersonagem.json();
        return personagem;
    } catch (erro) {
        console.error("Erro ao buscar o personagem:", erro);
        throw erro; 
    }
}

async function buscarNave(urlNave) {
    try {
        const respostaNave = await fetch(urlNave);
        const nave = await respostaNave.json();
        return nave;
    } catch (erro) {
        console.error("Erro ao buscar a nave:", erro);
        throw erro;
    }
}

function verificarTamanhoDaNave(nave) {
    const numeroLimite = 100;
    const tripulacao = parseInt(nave.crew);

    if (tripulacao > numeroLimite) {
        return `A nave ${nave.name} é considerada grande com ${tripulacao} tripulantes.`;
    } else {
        return `A nave ${nave.name} é pequena com ${tripulacao} tripulantes.`;
    }
}

async function exibirResultado(idPersonagem) {
    try {
        const personagem = await buscarPersonagem(idPersonagem);

        if (personagem.starships.length > 0) {
            const nave = await buscarNave(personagem.starships[0]);
            const resultado = verificarTamanhoDaNave(nave);
            console.log(resultado);
        } else {
            console.log(`${personagem.name} não possui naves registradas.`);
        }

    } catch (erro) {
        console.error("Erro ao buscar o personagem ou sua nave:", erro);
    }
}


exibirResultado(1);
