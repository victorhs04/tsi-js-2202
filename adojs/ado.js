let botaoOk = document.getElementById('ok');
let aleatorio = document.getElementById('aleatorio');
let input = document.getElementById('num');
let paragrafo = document.getElementById('resposta');

///processamento

function escutador() {

    botaoOk.addEventListener('click', numDigitado);
    aleatorio.addEventListener('click', numAleatorio);

}

escutador();

function numDigitado(evento) {

    evento.preventDefault();

    let num = input.value;


    if (num != '') {
        num = parseInt(num);
        acessarAPI(num);
    } else {
        //alert('Digite um numero ou clique no aleatório');
        numAleatorio(evento);
    }

}

function numAleatorio(evento) {

    evento.preventDefault();

    let num = Math.floor(Math.random() * 1001)
    acessarAPI(num);

}

function acessarAPI(num) {
    console.log(num);

    var url = "http://numbersapi.com/" + num;

    var request = new XMLHttpRequest();
    request.open("GET", url, true);

    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            console.log(request.responseText);

            resposta(request.responseText);
        }
    }

    request.send();

}

function resposta(frase) {
    paragrafo.innerText = frase;
}