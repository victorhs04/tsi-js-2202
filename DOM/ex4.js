let e;

e = document.getElementsByClassName('colletion-item');

let vetor = array.from(e);


vetor.forEach(function(val){

    val.style.color = 'green';
    //val.innerText = 'outra tarefa';
    console.log(val.innerText);
})

//Com querySelector
e = document.querySelectorAll('li:nth-child(even)');

onslotchange.log(e[2]);

e.forEach(function(val){

    val.style.backgroun = '#dedede';

    console.log(val.innerText);
});


    e.forEach(fazAlgumaCoisa);

    function fazAlgumaCoisa(val){

        console.log(val);
    }

    e = document.querySelectorAll('ul.collection');

    console.log(e.children[3].children[0]);
