const bonusDoGerente = 1000;
const bonusDoSupervisor = 500;
const bonusDoResto = 200;   
const desconto= 300;
const faixaAlta = 5000;
const faixaMedia = 3000;
const descontoFaixaAlta = 0.27;
const descontoFaixaMedia = 0.18;
const descontoFaixaBaixa = 0.11;
const jornadaDeTrabalho = 160;
const valorDaHora = 25;

function calcularSalarioFuncionario(horasTrabalhadas, valorHora, cargo) {
    const salarioBase = horasTrabalhadas * valorHora;

    let salarioComBonus;
    if (cargo === "gerente") {
        salarioComBonus = salarioBase + bonusDoGerente;
    } else if (cargo === "supervisor") {
        salarioComBonus = salarioBase + bonusDoSupervisor;
    } else {
        salarioComBonus = salarioBase + bonusDoResto;
    }

    const salarioComDesconto = salarioComBonus - desconto;

    let salarioFinal;
    if (salarioComDesconto > faixaAlta) {
        salarioFinal = salarioComDesconto - (salarioComDesconto * descontoFaixaAlta);
    } else if (salarioComDesconto > faixaMedia) {
        salarioFinal = salarioComDesconto - (salarioComDesconto * descontoFaixaMedia);
    } else {
        salarioFinal = salarioComDesconto - (salarioComDesconto * descontoFaixaBaixa);
    }

    return salarioFinal;
}

const salario = calcularSalarioFuncionario(jornadaDeTrabalho, valorDaHora, "gerente");
console.log(`O salário final é: ${salario}`);
