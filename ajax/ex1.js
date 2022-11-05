document.
    querySelector('button').
        addEventListener('click', recuperaConteudoAjax);

function recuperaConteudoAjax(){

    const XHR = new XMLHttpRequest;

    XHR.open('GET', 'http://127.0.0.1:5500/ajax/conteudo.txt', true);

    XHR.onload = function(){

        if(this.status == 200){

            //Recupera a string JSON e transforma
            //em objeto JSON
            let dados = JSON.parse(this.responseText);

            let saida = '';

            //Looping para ler todo o vetor
            dados.forEach(function(aluno){

                //verifica a idade da pessoa
                //para mostar se é maior ou menor
                //de idade
                saida = aluno.idade >= 18 ? 
                                `${aluno.nome} é maior de idade <br>`
                                :
                                `${aluno.nome} é menor de idade <br>`;
            });

            document.querySelector('#dadoRecuperado').innerHTML 
                                                            = saida; 
        }
    }

    XHR.send();
}        