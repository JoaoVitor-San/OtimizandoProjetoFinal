// Cria um objeto com os números e operação
const input = {
    numero1: parseFloat(prompt("Digite o primeiro número:")),
    numero2: parseFloat(prompt("Digite o segundo número:")),
    operacao: prompt("Digite a operação que deseja realizar (soma, subtração, multiplicação, divisão):"),
};

const { numero1, numero2, operacao } = input;

const resultado = operacoes[operacao]
    ? operacoes[operacao](numero1, numero2)
    : "Operação inválida!";

alert("O resultado da operação é: " + resultado);
console.log("O resultado da operação é:", resultado);
