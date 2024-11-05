const maximoDeTentativas = 3;
const senha = "12345";
function tentarLogin(senha) {
    let tentativas = 0;
    const senhaCorreta = "12345";

    while (tentativas < maximoDeTentativas) {
        if (senha === senhaCorreta) {
            return "Login efetuado com sucesso!";
        }
        tentativas++;
    }

    return "Tentativas de login excedidas.";
}

console.log(tentarLogin(senha));
