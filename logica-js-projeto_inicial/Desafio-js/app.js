//Exibe uma alerta no navegador
alert('Boas vindas ao nosso site');

//let nome = "Lua";
//let idade = 25;

//Criando variáveis e adicionando valores a ela
let numeroDeVendas = 50;
let saldoDisponivel = 1000;

let mensagemErro = "Erro! Preencha todos os campos"

//mostrando valor que contém na variável
alert(mensagemErro);

//Armazenando nome e idade nas respectivas variáveis
let nome = prompt('Qual é o seu nome?');
let idade = prompt('Qual a sua idade?');

//mostrando no console do inpecionar do navegador
console.log('Olá ' + nome + ' você tem ' + idade + ' anos certo?');

//Verificando se a idade é maior que 18, e mostrando um log caso a condição seja verdadeira
if(idade > 18){
    console.log('Pode tirar a habilitação.');
}else{
    console.log('Ainda não pode tirar a habilitação');
}