alert('Boas vindas ao nosso site');

//let nome = "Lua";
//let idade = 25;

let numeroDeVendas = 50;
let saldoDisponivel = 1000;

let mensagemErro = "Erro! Preencha todos os campos"
alert(mensagemErro);

let nome = prompt('Qual é o seu nome?');
let idade = prompt('Qual a sua idade?');

console.log('Olá ' + nome + ' você tem ' + idade + ' anos certo?');

if(idade > 18){
    console.log('Pode tirar a habilitação.');
}