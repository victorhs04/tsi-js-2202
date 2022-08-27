//ESTRUTURA DE REPETIÇÃO

//loopings

for(i = 0; i < 10; i++){
    console.log('Número' +  i)
}

//while

i = 0;

while(i < 10){
    console.log('Número da linha' + i);
    i++;
}

//do 

i = 20;

do{
    console.log('Número da linha com do:' + 5);
    i++;
}while(i < 10);

//condicionais

//if

let a = 5;
let b = 5;
if(a < b){
    console.log(a + 'é menor que' + b);
}else if(a == b ){
    console.log(' é igual a ' + b);
}else{
    console.log(' não é menor que' + b);
}

//switch
let diaSemana = 0;

switch(diaSemana){

    case 0:
        console.log('Domingo');

    case 1:
        console.log('Segunda');

    case 2:
        console.log('Terça');

    case 3:
        console.log('Quarta');

    case 4:
        console.log('Quinta');

    case 5:
        console.log('Sexta');

    case 6:
        console.log('Sábado');
    default:
        console.log('Número inválido');

}
    
//Ternário

let x = 4;
let y = 2;

let resultado = x > y ? 'x é maior' : 'é menor';

console.log(resultado);

//let genero

let genero = 'F';

let saida = genero == 'M' ? 'Masculino' : 'Feminino';

console.log(saida);

//coalescente
let coisa = 10;
let variavel = coisa ?? 'Não há';
console.log(variavel);




