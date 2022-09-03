let amigos = ['Victor' ,
              'Hugo' ,
              'Marta' , 
              'Yuri' , 
              'Matheus'];

console.log(amigos.length);

//Looping com o vetor

for(let i  = 0; i < amigos.length ; i++){

    //Template string (interpolação)
    console.log(`Amigo: ${amigos[i]}`);
}

//foreach For = para each = cada
amigos.forEach(function( valor, indice){

    console.log(`${indice} : ${valor}`);
});

//Map
amigos.map(function(valor, indice){

    console.log(`${indice} : ${valor}`);
});