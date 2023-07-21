// Desafio



let saldo = 0;
let limite = 500;
let extrato = "";
let numeroSaques = 0; 

const limiteSaques = 3;

let x = true;

while (x == true) {
    menu = prompt(`
    ======== M E N U ========
    [d] Depósito
    [s] Saque
    [e] Extrato
    [q] Sair
    =======================
    `);

    if(menu == "d") {
        deposito = parseFloat(prompt("Digite o valor a ser depositado: "));
        depositoFormatado = deposito.toFixed(2);

        if(deposito > 0) {
            saldo += deposito;                                                             
            extrato += `Depósito: R$${depositoFormatado}\n`;
            alert(`Depósito: R$${depositoFormatado} realizado`);
        } else {
            alert("Operação falhou! O valor informado é inválido!");
        }

    } else if(menu == "s") {

        if (numeroSaques < limiteSaques) {
            saque = parseFloat(prompt("Digite o valor a ser sacado: "));
            saqueFormatado = saque.toFixed(2);

            if(saque > 0 && saque <= saldo) {

                if(saque <= limite) {
                    saldo -= saque;
                    extrato += `Saque: R$${saqueFormatado}\n`;
                    alert(`Saque: R$${saqueFormatado} realizado`);
                    
                    numeroSaques++;

                } else {
                    alert(`Operação falhou! O valor informado é maior do que o limite de R$${limite.toFixed(2)}`);
                };
            } else {
                alert("Valor não disponível");
            }
                
        } else {
            alert(`Operação falhou! O limite diário de saques foi atingido!`);
        };
        

    } else if(menu == "e") {
        saldoFormatado = saldo.toFixed(2);


        if(extrato == "") {
            alert(`
            Não foram realizadas movimentações.
            O saldo da conta é de R$${saldoFormatado}
            `);

        } else {
            alert(`
            ${extrato}
            O saldo da conta é de R$${saldoFormatado}
            `);

        }

    } else if(menu == "q") {
        alert("Agradecemos pela preferência");

        x = false;

        // break;
    } else {
        alert("Você escolheu uma opção inválida.");
    }

}




// Fomos contratados por um grande banco para desenvolver o seu novo sistema. 
// Esse banco deseja modernizar suas operações e para isso escolheu a linguagem js. 
// Para a primeira versão do sistema devemos implementar apenas 3 operações: depósito, saque e extrato.

// Operação: Depósito
// Deve ser possível depositar valores positivos para a minha conta bancária. A v1 do projeto trabalha apenas com 1 usuário, 
// dessa forma não precisamos nos preocupar em identificar qual é o número da agência e conta bancária. 
// Todos os depósitos devem ser armazendos em uma variável e exibidos na operação de extrato.

// Operação: Saque
// O sistema deve permitir realizar 3 saques diários com limite máximo de R$500,00 por saque. 
// Caso o usuário não tenha saldo em conta, o sistema deve exibir uma mensagem informando que não será possível sacar o dinheiro por falta de saldo. 
// Todos os saques devem ser armazenados em uma variável e exibidos na operação de extrato. 

// Operação: Extrato
// Essa operação deve listar todos os depósitos e saques realizados na conta. 
// No fim da listagem deve ser exibido o saldo atual da conta. 
// Se o extrato estiver em branco, exibir a mensagem: Não foram realizadas movimentações.

// Os valores devem ser exibidos utilizando o formato R$XXX.XX, exemplo:
// 1500.45 = R$ 1500.45

// tentar verificação de positivo ou negativo com ternário