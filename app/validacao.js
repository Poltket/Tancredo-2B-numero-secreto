function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute

    if (chuteForInvalido(numero)) {
    console.log('Valor inválido')
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
    elementoChute.innerHTML += `
    <div>Valor inválido: Fale um número entre ${menoValor} e ${maiorValor}</div> 
    `
    }
}


function chuteForInvalido(numero) {
    return Number.IsNan(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

