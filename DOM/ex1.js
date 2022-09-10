console.log(window);

//Como utilizar atributos de um objeto
//alert(`Sua resolução é: ${window.innerHeight} x ${window.innerWidht} `);

let meuTitulo = document.getElementById('Titulo');

meuTitulo.innerText = 'Mudou!';

meuTitulo.style.background = 'purple';

//let nav = window.navigator. userAgent;
//alert(nav);


if(confirm('deixe uma mensagem')){
    let msg = prompt('mensagem');
    meuTitulo.innerText = msg + `voce esta usando o navegador ${nav}`;
    meuTitulo.style.background = 'green';
}else{
    meuTitulo.innerText = 'sem mensagem';
    meuTitulo.style.background = 'purple';
}

console.log(window.navigator);
