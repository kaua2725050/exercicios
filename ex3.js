//Exercício 3: Ímpar ou par
//Faça um programa que receba um número do usuário e informe se este número é par ou
//ímpar.

let num = parseInt(prompt("Escolha um número inteiro:"))

if (num%2 == 0) {
	console.log("Este número é Par");
}else {
	console.log("Este número é Impar");
}