//como criar elementos

let novoItemNalista = document.createElement('li');


//define o id do novo elemento
novoItemNalista.id = 'novo-item';

//define a classe CSS do novo elemento
novoItemNalista.className = 'colletion-item';

//Adiciona um node filho
novoItemNalista.setAttribute('tittle', 'Nvo item na lista')

novoItemNalista.appendChild(
    document.createTextNode('Fazer exercicios fisicos'));


//Elemento A

let ElementoAncora = document.createElement('a')

ElementoAncora.className = 'delete-item secondary-content';

ElementoAncora.setAttribute('href', '#');

//criar sub elemnto <i>
let elementoIcone = document.createElement('i');

elementoIcone.claaName ='fa fa-remove';

//adiciona <i> em <a>

ElementoAncora.appendChild(elementoIcone);

//adiciona <a> em <i>

novoItemNalista.appendChild(ElementoAncora);

//let elementoUele = document.querySelector('ul.collection');

console.log(novoItemNalista);

//como capturar o <ul> pela class

let elementoUele = document.getElementsByClassName('collect')
elementoUele[0].appendChild(novoItemNalista);
