const secaoTarefes = document.getElementById('tasks-section');
const listaTarefas = document.getElementById('lista-tarefas');
const inputCamp = document.getElementById('texto-tarefa');
const btnAdicionarTarefa = document.getElementById('criar-tarefa');

// Adicionando tarefas na lista

function criarTarefa() {
  const tarefaString = inputCamp.value;

  btnAdicionarTarefa.addEventListener('click', () => {
    const tarefa = document.createElement('li');
    tarefa.innerHTML = inputCamp.value;
    tarefa.className = 'tarefa';
    listaTarefas.appendChild(tarefa);
    inputCamp.value = '';
  });
}
criarTarefa();

// Marcando atividades concluídas
function tarefaConcluida() {
  listaTarefas.addEventListener('dblclick', (event) => {
    const tarefaConcluida = event.target;
    if (tarefaConcluida.classList.contains('completed')) {
      tarefaConcluida.classList.remove('completed');
    } else {
      tarefaConcluida.classList.add('completed');
    }
  });
}
tarefaConcluida();

// Destacando atividade selecionada com background cinza
function toTarefaSelecionada() {
  listaTarefas.addEventListener('click', (event) => {
    const tarefaSelecionadaAnterior = document.getElementsByClassName('selecionada');
    for (index = 0; index < tarefaSelecionadaAnterior.length; index++) {
      if (tarefaSelecionadaAnterior[index] !== event.target) {
        tarefaSelecionadaAnterior[index].classList.remove('selecionada');
        // tarefa[index].style.backgroundColor = 'white';
      }
    }
    const tarefaSelecionada = event.target;
    // As linhas comentadas removem a classe selecionada ao clicar novamente, para ativar, descomente da 46 a 51 e comente a 52.
    // let listaDeClasse = tarefaSelecionada.classList
    // if (listaDeClasse.contains('selecionada')){
    //     tarefaSelecionada.classList.remove('selecionada');
    // } else {
    //     tarefaSelecionada.classList.add('selecionada');
    // }
    tarefaSelecionada.classList.add('selecionada');
  });
}
toTarefaSelecionada();

// Inserindo botão para limpar a lista
// Botão inserido no HTML
function limparLista() {
  const btnApagaTudo = document.getElementById('apaga-tudo');
  btnApagaTudo.addEventListener('click', () => {
    // Código refatorado a partir do conteúdo deste link: https://www.w3schools.com/jsref/met_node_removechild.asp
    while (listaTarefas.hasChildNodes()) {
      listaTarefas.removeChild(listaTarefas.firstChild);
    }
  });
}
limparLista();

// Inserindo botão para limpar concluídas
// Botão inserido no HTML
function limparConcluidas() {
  const apagaComplited = document.querySelector('#remover-finalizados');
  apagaComplited.addEventListener('click', () => {
    const completeds = document.querySelectorAll('.completed');
    // console.log(completeds)
    for (index = 0; index < completeds.length; index++) {
      listaTarefas.removeChild(completeds[index]);
    }
  });
}
limparConcluidas();

// Inserindo botão para salvar lista
// Botão inserido no HTML
let arrayTarefas = [];
let arrayClasses = [];
let tarefasArmazenadasString;
let arrayTarefasArmazenadas;
let arrayClassesArmazenadas;
const btnSalvarLista = document.querySelector('#salvar-tarefas');
function salvaLista() {
  arrayTarefas = [];
  arrayClasses = [];
  let listaSalva = document.querySelectorAll('.tarefa');
  for (index = 0; index < listaSalva.length; index++) {
    arrayTarefas.push(listaSalva[index].innerHTML);
  }
  for (index = 0; index < listaSalva.length; index++) {
    arrayClasses.push(listaSalva[index].classList.value);
  }
  localStorage.removeItem('tarefas');
  localStorage.removeItem('classes', arrayClasses);
  localStorage.setItem('tarefas', arrayTarefas);
  localStorage.setItem('classes', arrayClasses);
  arrayTarefas = [];
  arrayClasses = [];
  listaSalva = document.querySelectorAll('.tarefa');
  for (index = 0; index < listaSalva.length; index++) {
    arrayTarefas.push(listaSalva[index].innerHTML);
  }
  for (index = 0; index < listaSalva.length; index++) {
    arrayClasses.push(listaSalva[index].classList.value);
  }
  localStorage.removeItem('tarefas');
  localStorage.removeItem('classes', arrayClasses);
  localStorage.setItem('tarefas', arrayTarefas);
  localStorage.setItem('classes', arrayClasses);
}
btnSalvarLista.addEventListener('click', salvaLista);

// Recuperando lista salva ao recarregar a página
tarefasArmazenadasString = localStorage.getItem('tarefas');
classesArmazenadasString = localStorage.getItem('classes');
if (tarefasArmazenadasString !== null) {
  arrayTarefasArmazenadas = tarefasArmazenadasString.split(',');
  arrayClassesArmazenadas = classesArmazenadasString.split(',');
  function recuperarLista() {
    for (let index = 0; index < arrayTarefasArmazenadas.length; index++) {
      const tarefa = document.createElement('li');
      tarefa.innerHTML = arrayTarefasArmazenadas[index];
      tarefa.className = arrayClassesArmazenadas[index];
      listaTarefas.appendChild(tarefa);
    }
  }
  recuperarLista();
}

// Inserindo botão para apagar selecionada
// Botão inserido no HTML
function limparSelecionada() {
  const apagaSelecionada = document.querySelector('#remover-selecionado');
  apagaSelecionada.addEventListener('click', () => {
    const selecionadas = document.querySelectorAll('.selecionada');
    // console.log(completeds)
    for (index = 0; index < selecionadas.length; index++) {
      listaTarefas.removeChild(selecionadas[index]);
    }
  });
}
limparSelecionada();

// Inserindo botões para mover-cima e mover-baixo
// Botão inserido no HTML
function moverCima() {
  const btnMoverCima = document.getElementById('mover-cima');
  btnMoverCima.addEventListener('click', () => {
    const listaDeTarefas = document.querySelector('#lista-tarefas');
    const primeiroElemento = document.querySelector('li');
    const tarefaSelecionada = document.querySelector('.selecionada');
    // console.log(listaDeTarefas)
    // console.log(primeiroElemento)
    // console.log(tarefaSelecionada)
    // console.log(tarefaSelecionada.length)
    if (tarefaSelecionada !== null) {
      // console.log(tarefaSelecionada)
      const elementoAnterior = tarefaSelecionada.previousSibling;
      if (tarefaSelecionada !== primeiroElemento) {
        listaDeTarefas.insertBefore(tarefaSelecionada, elementoAnterior);
      }
    }
    // salvaLista ();
  });
}
moverCima();

function moverBaixo() {
  const btnMoverBaixo = document.getElementById('mover-baixo');
  btnMoverBaixo.addEventListener('click', () => {
    const listaDeTarefas = document.querySelector('#lista-tarefas');
    const ultimoElemento = listaDeTarefas.lastElementChild;
    const tarefaSelecionada = document.querySelector('.selecionada');
    // console.log(listaDeTarefas)
    // console.log(ultimoElemento)
    // console.log(tarefaSelecionada)
    // console.log(tarefaSelecionada.length)
    if (tarefaSelecionada !== null) {
      // console.log(tarefaSelecionada)
      const elementoProximo = tarefaSelecionada.nextSibling;
      if (tarefaSelecionada !== ultimoElemento) {
        listaDeTarefas.insertBefore(elementoProximo, tarefaSelecionada);
      }
    }
    // salvaLista ();
  });
}
moverBaixo();

window.onload = function () {
  const selecionada = document.getElementsByClassName('selecionada');
  for (let index = 0; selecionada.length; index++) {
    selecionada[index].classList.remove('selecionada');
  }
};
