//01 - Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio!';

//02 - Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
function verificarClickBotao() {
    console.log('O botão foi clicado!');
}

//03 - Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
function exibirAlert() {
    alert('Eu amo JS!');
}

//04 - Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
function qualCidade() {
    const cidade = prompt('Digite o nome de uma cidade do Brasil: ');
    alert(`Estive em ${cidade} e lembrei de você.`);
}

//05 - Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.
function somarNumeros() {
    let valor1 = prompt('Digite um valor: ');
    let valor2 = prompt('Digite outro valor: ');
    let resultado = Number(valor1) + Number(valor2);

    alert(`O resultado da soma de ${valor1} e ${valor2} é ${resultado}.`);
}
