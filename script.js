/*1. Solicite o nome e cpf do seu cliente
2. Ofereça a opção de saque ou depósito
3. Pergunte um valor
4. Caso a opção de saque seja a escolhida, remova o valor
inserido do saldo total.
5. Caso a opção de depósito seja escolhida, adicione o valor
inserido do saldo total
6. Pergunte se o seu usuário deseja continuar. (Insira 1 para
continuar e 2 para parar)
7. Exiba o saldo total
8. Exiba o maior valor inserido(independente de ser depósito ou
saque)*/


var nome = prompt("Qual seu nome?")
var cpf = prompt("Qual seu cpf?")
var saldoTotal = 0
var maiorNumero = 0

var continuar = true
while(continuar){
    var valor = parseInt(prompt("Insira um valor"))
    var pergunta = prompt("Saque = 1 // Deposito = 2")
    if(pergunta == 1 && valor >= 1){
        saldoTotal = saldoTotal - valor
        console.log("Seu saldo atual e de:", saldoTotal)}
        if(valor > maiorNumero){
            maiorNumero = valor
        }
    if(pergunta == 2 && valor >= 1){
        saldoTotal = saldoTotal + valor
        console.log("Seu saldo atual e de:", saldoTotal)
        if(valor > maiorNumero){
            maiorNumero = valor
        }
    }
    var perguntaDois = prompt("Deseja parar? Se sim digite 1")
    if(perguntaDois == 1){
        console.log("O programa sera encerrado")
        console.log("Seu saldo final e de:", saldoTotal)
        continuar = false
        console.log("O maior valor inserido foi:", maiorNumero)
    }
}