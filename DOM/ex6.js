
//criamos um novo elemento
const novoTitulo= document.createElement('h2');

//colocamos as caracteristicas que desejamos
novoTitulo.id = 'testk-title';
novoTitulo.oppendChild(document.createTextNode("Nova Lista"))

//capturamos o elemento H5 atual (que está originalmente)
const tituloAtual= document.getElementById('task-title');

//queremos atualizar
let divMaeDoTitulo = document.getElementsByClassName('card-action');

console.log(divMaeDoTitulo);


//atualizamos o elemento
divMaeDoTitulo[0].replaceChild(novoTitulo, tituloAtual);