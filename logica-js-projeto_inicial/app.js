alert('Boas vindas ao jogo do número secreto!');

let numeroSecreto = 29;
let valorDigitado = prompt('Escolha um número de 1 a 30: ');

if(numeroSecreto == valorDigitado){
    
    console.log('Parabéns!, você acertou o número.');
}else{
    console.log('Você errou, atualize a página e tente novamente.');
}