//Desafio 01
/* Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!". */

let diaDaSemana = prompt('Qual é o dia da semana?');

if(diaDaSemana == 'Sábado' || diaDaSemana == 'Domingo' ){
    alert('Bom final de semana');
}else{
    alert('Boa semana!');
}

//Desafio 02
/* Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando. */

let valordigitado = prompt('Digite um número');

if(valordigitado > 0){
    alert('O número digitado é positivo');
}else{
    alert('O número digitado é negativo');
}

//Desafio 03
/* Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.". */

let pontuacao = prompt('Digite sua pontuação:');

if(pontuacao >= 100){
    alert('Parabéns, você venceu!');
}else{
    alert('Tente novamente para ganhar');
}

//Desafio 04
/* Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo. */

let saldoAtual = 880;

//Duas opções diferentes
alert('Seu saldo atual é ' + saldoAtual);
alert(`Seu saldo atual é: ${saldoAtual}`);

//Desafio 05
/* Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome. */

let nome = prompt('Digite seu nome: ');

alert(`Olá, ${nome}, seja bem-vindo! `);
