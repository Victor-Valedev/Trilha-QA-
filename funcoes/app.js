//01 - Criar uma função que exibe "Olá, mundo!" no console.
function Mesagem() {
     console.log('Olá, mundo!');
}
Mesagem()

//02 - Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
exibirMesagem('Victor'); //Aqui passo o valor da variável de parâmetro
function exibirMesagem(nome) {
    console.log(`Olá, ${nome}.`);
}

//03 - Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function dobrarNumero(numero) {
    return Number(numero) + Number(numero);
}
let resultado = dobrarNumero(15);
console.log(resultado);

//04 - Criar uma função que recebe três números como parâmetros e retorna a média deles.
function mediaNumeros(num1, num2, num3) {
    return (Number(num1)  + Number(num2) + Number(num3)) / 3;
}
let resultado2 = mediaNumeros(10,20,30);
console.log(resultado2);

//05 - Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function maiorNumero(num1,num2) {
    return num1 > num2 ? num1 : num2; //retorna sempre o maior valor
}
console.log(maiorNumero(1,5));

//06 - Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo.
let resultado3 = multiplcarNumero(25);
function multiplcarNumero(num) {
    return Number(num) * Number(num);
}
console.log(resultado3);



