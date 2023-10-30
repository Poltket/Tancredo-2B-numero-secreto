const menorValor = 1;
const maiorValor = 1000;

const numeroSecreto =  gerarNumeroSecreto()

function gerarNumeroSecreto() {
    return parseInt(Math.random() * maiorValor + 1)
}

console.log('Número Secreto:', numeroSecreto)

const elementoMenorValor = document.getElementById('menor-valor') 
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor

if (numero === numeroSecreto) {
    document.body.innerHTML = `
    <h2>Você acertou!</h2>
    <h3>O número secreto era ${numeroSecreto}</h3>
    `
}