const dataNumero1 = "2024-01-01";
const dataNumero2 = "2024-12-31";

function calcularDiferencaEntreDatas(dataNumero1, dataNumero2) {
    return new Date(dataNumero1) - new Date(dataNumero2);
}

const resultado = calcularDiferencaEntreDatas(dataNumero1, dataNumero2);
console.log(resultado);
