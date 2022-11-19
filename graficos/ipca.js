document.querySelector('button').addEventListener('click', mostraIpca);

function mostraIpca(){
    document.getElementById('ipca').innerHTML = "";
    
    let anoEscolhido = document.getElementById('EscolhaAno').value;

    const url = 'https://api.bcb.gov.br/dados/serie/bcdata.sgs.4448/dados?formato=json&dataInicial=20201101';

    fetch(url).then(function(retorno){
        return retorno.text();
    }).then(function(stringJson){
        const indices = JSON.parse(stringJson);

        let indice;
        let ipca = [];

        indices.forEach(function(mes){
            anoString = mes.data.substring(6, 10);
            mesString = mes.data.substring(3, 5);
            anoMesString = anoString + '-' + mesString;

            indice = parseFloat(mes.valor);

            if(parseInt(anoString) != anoEscolhido && anoEscolhido != ""){
                return;
            }

            ipca.push({month: anoMesString, value: indice});

        });

        if(ipca.length == 0){
            alert(`Não ha dados para o ano de ${anoEscolhido}`)
        }
        
        new Morris.Line({
            element: 'ipca',

            data: ipca,

            xkey: 'month',
            ykeys: ['value'],
            labels: ['IPCA']
        });
    }).catch(function(){
        alert('API do Banco Central esta fora do ar');
    })
}