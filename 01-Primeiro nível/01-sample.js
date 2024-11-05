const maiorNumero = 6;
const divisor = 2;
const numerosPresentes = Array.from({ length: maiorNumero }, (_, i) => i + 1);

function verificaParesPresentes(array){
    return array.filter(numero => numero % divisor == 0);
}



const numerosParesPresentes = verificaParesPresentes(numerosPresentes); 
console.log(numerosParesPresentes);
