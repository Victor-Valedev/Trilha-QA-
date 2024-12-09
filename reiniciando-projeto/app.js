//01 - Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function calcularImc(peso,altura) {
    return peso / (altura * altura);
}
let resultado = calcularImc(100, 1.90);
console.log(resultado.toFixed(2));

//02 - Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function numeroFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    }
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
        fatorial *= i;
    }
    return fatorial;
}
let numero = 5;
let resultadoFatorial = numeroFatorial(numero);
console.log(`O fatorial de ${numero} é ${resultadoFatorial}.`);

//03 - Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function converterValorEmDolarParaReal(valor) {
    let cotacaoDolar = 4.80;
    let valorEmReais = valorEmDolar * cotacaoDolar;
    return valorEmReais.toFixed(2);
}
let valorEmDolar = 5;
let valorEmReais = converterValorEmDolarParaReal(valorEmDolar);
console.log(`${valorEmDolar} dólares equivalem a R$ ${valorEmReais} reais`);


//04 - Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function calcularSalaRetangular(altura, largura) {
    const area = altura * largura;
    const perimetro = 2 * (altura + largura);

    console.log(`Área da sala retangular: ${area.toFixed(2)} m²`);
    console.log(`Perímetro da sala retangular: ${perimetro.toFixed(2)} m`);
}
let altura = 3;
let largura = 4;
calcularSalaRetangular(altura, largura);

//05 - Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function perimetroSalaCircular(raio) {
    const pi = 3.14;

    const area = pi * raio * raio; //Cálculo da área
    const perimetro = 2 * pi * raio; //Cálculo do perímetro

    console.log(`Área da sala circular: ${area.toFixed(2)} m²`);
    console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} m`);
}
perimetroSalaCircular(5);

//06 - Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function tabuadaNumero(numero) {
    console.log(`Tabuada de ${numero}.`);

    let inicializar = 1;

    while(inicializar <= 10) {
        console.log(`${numero} x ${inicializar} = ${numero * inicializar}`);
        inicializar++;
    }
}
tabuadaNumero(5);

