
// localStorage.setItem('nome', 'Camila');
// localStorage.setItem('sobrenome', 'Silva');


btn = document.getElementById('botao');

btn.addEventListener('click', mostrar);

function mostrar(evento){

    let valor = document.getElementById('entrada').value;
    document.getElementById('mostrar').innerText = valor;
    document.getElementById('entrada').value = '';
    localStorage.setItem('dadoDoUsuario', valor );
}

document.querySelector('#mostar').innerText =
    localStorage.getItem('dadoDoUsuario');