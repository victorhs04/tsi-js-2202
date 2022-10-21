
//como apagar itens

/*
const itens= document.querySelectorAll('li');
console.log(itens);
itens[1].remove();
*/

//outra forma de remover
const item= document.querySelector('ul');


console.log(item.firstElementChild);


item.firstElementChild.firstElementChild.remove();
