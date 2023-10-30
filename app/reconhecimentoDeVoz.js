const elementoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    chute = e.results[0][0].transcript
    exibeChuteNaTela (chute)
    verificaSeOChutePossuiUmValorValido(chute)
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
    <div>Você disse</div>
    <span class="box">${chute}</span>
    `
}  else if (numero > numeroSecreto) {
    elementoChute.innerHTML += `
    <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
    `

}  else {
    elementoChute.innerHTML += `
    <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
    `
}