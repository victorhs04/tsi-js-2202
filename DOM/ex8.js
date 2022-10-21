const cartao = document.querySelector('.card');
const titulo = document.querySelector('h5');


cartao.addEventListener('mousemove', executaAcao);

function executaAcao(evento){

    //console.log(evento);

    titulo.textContent = `Eixo X:${evento.offsetX} Eixo Y:${evento.offsetY}`;
}