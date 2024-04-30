const botoes = document.querySelectorAll('.botao');
const textos = document.querySelectorAll('.aba-conteudo');

const contadores = document.querySelectorAll(".contador")
const tempoAtual = Date(); //retorna a data atual do computador


const tempoObjetivo01 = new Date("2024-12-01T00:00:00");
const tempoObjetivo02 = new Date("2024-10-20T00:00:00");
const tempoObjetivo03 = new Date("2024-11-24T00:00:00");
const tempoObjetivo04 = new Date("2024-10-12T00:00:00");

const tempos = [tempoObjetivo01, tempoObjetivo02, tempoObjetivo03, tempoObjetivo04];

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove('ativo')
            textos[j].classList.remove('ativo')
        }

        botoes[i].classList.add('ativo')
        textos[i].classList.add('ativo')
    }

}

function atualizaCronometro() {
     for (let i = 0; i < tempos.length; i++) {
        document.getElementById("dias"+i).textContent = calculaTempo(tempos[i])[0];
        document.getElementById("horas"+i).textContent = calculaTempo(tempos[i])[1];
        document.getElementById("minutos"+i).textContent = calculaTempo(tempos[i])[2];
        document.getElementById("segundos"+i).textContent = calculaTempo(tempos[i])[3];
        
        
    }
}
function comecaCronometro() {
    atualizaCronometro();
    setInterval(atualizaCronometro, 1000);
}

comecaCronometro();



function calculaTempo(tempoObjetivo) {

    let tempoAtual = new Date()
    let tempoFinal = tempoObjetivo - tempoAtual

    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dia = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    if (tempoFinal > 0) {
        return [dia, horas, minutos , segundos];
    } else {
        return [0, 0, 0, 0]
    }

}