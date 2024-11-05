const descontoPadrao = 0.15;
const precoDoProduto = 100;

function calcularDesconto(preco) {
    return preco - (preco * descontoPadrao);
}

const precoFinal = calcularDesconto(precoDoProduto);
console.log(`Preço com desconto: ${precoFinal}`);
