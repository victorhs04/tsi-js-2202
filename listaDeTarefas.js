const entradaTarefa = document.querySelector("#tarefa");
const btnAddTarefa = document.querySelector(".btn");
const listaDeTarefas = document.querySelector(".collection");
const filtroDeTarefa = document.querySelector("#filtro");
const btnLimpaTudo = document.querySelector(".limpar-tarefas");

function carregaMonitoresDeEventos() {
  //Quando a pagina for carregada chamar o recupera tarefas
  document.addEventListener("DOMContentLoaded", recuperaTarefas);
  // Evento para adicionar a tarefa
  btnAddTarefa.addEventListener("click", adicionarTarefa);

  // Evento para apagar uma única tarefa
  listaDeTarefas.addEventListener("click", apagarTarefa);

  btnLimpaTudo.addEventListener("click", apagarTudo);

  filtroDeTarefa.addEventListener("keyup", filtrar);
}
carregaMonitoresDeEventos();

function recuperaTarefas(evento) {
  //recuperar dados do local storage
  let tarefas = localStorage.getItem("tarefa");

  //verificar ha dados recuperados, se nao tiver tranforma em vetor
  if (tarefas == null) {
    tarefas = [];
  }

  tarefas = JSON.parse(tarefas);

  tarefas.forEach(function (tarefa) {
    // Cria <li> com a nova tarefa
    const li = document.createElement("li");
    li.className = "collection-item";
    li.appendChild(document.createTextNode(entradaTarefa.value));

    // Cria a onde vai ficar o botão de apagar para a tarefa
    const a = document.createElement("a");
    a.className = "apaga-tarefa secondary-content";

    // Cria ícone com "X" para apagar a tarefa
    const i = document.createElement("i");
    i.className = "fa fa-remove";

    // Monta o elemento <li>
    a.appendChild(i);
    li.appendChild(a);

    // Adicionando o <li> na <ul>
    listaDeTarefas.appendChild(li);
  });
}

function filtrar(evento) {
  //capturamos o que o usuario esta digitando.
  const procurado = evento.target.value.toLowerCase();
  //captura todos os elemetentos Li de uma vez.
  const tarefa = document.querySelectorAll("collection-item");
  //para cada terefa busque a string desejada.
  tarefa.forEach(function (tarefa) {
    // recuperamos apenas o texto do elemento
    //li aonde está a tarefa.
    let TextoTarefa = tarefa.innertText;
    // prucurando a string digitada no filtro
    // no texto que esta no <li>
    if (TextoTarefa.toLowerCase().indexOf(procurado) != -1) {
      tarefa.style.display = "block";
    } else {
      tarefa.style.display = "none";
    }
  });
}

function apagarTudo(evento) {
  evento.preventDefault();

  listaDeTarefas.innerHTML = "";
}

function apagarTarefa(evento) {
  // Se o elemento pai for o elemento <a>, apaga o elemento <li>, ou seja, a tarefa
  if (evento.target.parentElement.classList.contains("apaga-tarefa")) {
    evento.target.parentElement.parentElement.remove();
  }

  apagarDoLocalStorage(evento.target.parentElement.parentElement)
}

function apagarDoLocalStorage(tarefa){
    let tarefaParaSerApagada = tarefa.innerHTML;

    let tarefas = [];

    //recuperar o que j existe no localStorage
    if(localStorage.getItem('tarefa') !== null){
        //transformar em um objeto json, nao em uma string
        tarefas = JSON.parse(localStorage.getItem('tarefas'));
    }

    //fazer um looping para buscar tarefa
    tarefas.forEach(function(tarefa){
        //se encotrarmos oque apagar, apagamos
        if(tarefaParaSerApagada == tarefa){
            tarefas.splice(indice, 1)
        }
    });

    //gravar o objeto JSON novamente
    localStorage.setItem("tarefa", JSON.stringify(tarefa));
}

function adicionarTarefa(evento) {
  evento.preventDefault();

  // Verifica se usuário digitou algo
  if (entradaTarefa.value === "" || !entradaTarefa) {
    alert("Digite uma tarefa!");
    return;
  }

  // Cria <li> com a nova tarefa
  const li = document.createElement("li");
  li.className = "collection-item";
  li.appendChild(document.createTextNode(entradaTarefa.value));

  // Cria a onde vai ficar o botão de apagar para a tarefa
  const a = document.createElement("a");
  a.className = "apaga-tarefa secondary-content";

  // Cria ícone com "X" para apagar a tarefa
  const i = document.createElement("i");
  i.className = "fa fa-remove";

  // Monta o elemento <li>
  a.appendChild(i);
  li.appendChild(a);

  // Adicionando o <li> na <ul>
  listaDeTarefas.appendChild(li);

  // Apaga os dados digitados no input
  entradaTarefa.value = "";

  gravarTarefa(entradaTarefa.value);
}

function gravarTarefa(tarefas) {
  let tarefa = [];

  let trfs = localStorage.getItem("tarefa");

  if (trfs != null) {
    tarefa = JSON.parse(trfs);
  }

  tarefa.push(tarefa);

  localStorage.setItem("tarefa", JSON.stringify(tarefa));
}