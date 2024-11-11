const precoPorKM = 10;
const distancia = 50;

function calcularFrete(distancia) {
    return distancia * precoPorKM;
}

const frete = calcularFrete(distancia);
console.log(`O valor do frete é: ${frete}`);
