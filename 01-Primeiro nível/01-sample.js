function verificaParesPresentes(numerosPresentes) {
    const numerosPares = [];
    const divisorPar = 2;

    for (let i = 0; i < numerosPresentes.length; i++) {
        if (numerosPresentes[i] % divisorPar === 0) {
            numerosPares.push(numerosPresentes[i]);
        }
    }
    return numerosPares;
}

//numerosPresentes é um array que armazena os numeros de 1 a 6 para serem usados na função verificaPares;
const numerosPresentes = [1, 2, 3, 4, 5, 6];
const numerosParesPresentes = verificaParesPresentes(numerosPresentes); 
console.log(numerosParesPresentes);
