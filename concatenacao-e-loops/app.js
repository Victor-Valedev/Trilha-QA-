alert('Boas vindas ao nosso site');

let numeroSecreto = 5;
let chute = prompt('Escolha um número entre 1 e 10');

//Se o chute for igual ao número secreto
if(chute == numeroSecreto){
    //Para usar a variável diretamente na string, use aspas invertidas e acrescente o sifrão junto com as chaves e dentro dela a variável correspondente.
    alert(`Você acertoou! o número secreto é: ${numeroSecreto}`);
} else{
    alert('Você errouu!');
}