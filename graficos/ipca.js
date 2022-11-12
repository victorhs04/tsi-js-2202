document.querySelector('button').addEventListener('click', mostrarIpca);



function mostrarIpca(evento){

    evento.preventDefault();



    const url ='api.bcb.gov.br/dados/serie/bcdata.sgs.4448/dados?formato=json&dataInicial=20201101'



    fetch(url).then(function(retorno){



        return retorno.text();

    }).then(function(stringJson){



        console.log(stringJson);



        jsonParaMorris = {



            element: 'ipca',

            

            data: [

              { year: '2008', value: 20 },

              { year: '2009', value: 10 },

              { year: '2010', value: 5 },

              { year: '2011', value: 5 },

              { year: '2013', value: 30 },

              { year: '2014', value: 50 }

            ],

 

            xkey: 'year',



            ykeys: ['value'],

            

            labels: ['Value']



        }



    }).catch(function(){



        alert('API do banco central fora do ar');

    });



}




