const secaoTarefes = document.getElementById('tasks-section');
const listaTarefas = document.getElementById('lista-tarefas');
const inputCamp = document.getElementById('texto-tarefa');
const btnAdicionarTarefa = document.getElementById('criar-tarefa');

//Adicionando tarefas na lista

function criarTarefa () {
    let tarefaString = inputCamp.value;

    btnAdicionarTarefa.addEventListener('click', function () {
        let tarefa = document.createElement('li');
        tarefa.innerHTML = inputCamp.value;
        tarefa.className = 'tarefa';
        listaTarefas.appendChild(tarefa);
        inputCamp.value = "";
    })
}
criarTarefa ()

//Destacando atividade selecionada com background cinza

function toTarefaSelecionada () {
        
    listaTarefas.addEventListener('click', function (event) {       
        let tarefaSelecionadaAnterior = document.getElementsByClassName('selecionada')
        for (index = 0; index < tarefaSelecionadaAnterior.length; index ++) {
            tarefaSelecionadaAnterior[index].className = 'tarefa';              
            // tarefa[index].style.backgroundColor = 'white';        
        }        
        let tarefaSelecionada = event.target
        if (tarefaSelecionada.className === 'tarefa') {
            tarefaSelecionada.className = 'tarefa selecionada';        
            // tarefaSelecionada.style.backgroundColor = 'gray';  
        } else if (tarefaSelecionada === 'tarefa selecionada') {
            for (index = 0; index < tarefaSelecionadaAnterior.length; index ++) {
            tarefaSelecionadaAnterior[index].className = 'tarefa';              
            // tarefa[index].style.backgroundColor = 'white';        
            }
        }
    });
}
toTarefaSelecionada ()

//Marcando atividades concluídas

function tarefaConcluida () {
    
    listaTarefas.addEventListener('dblclick', function (event) {
        let tarefaConcluida = event.target;
        if (tarefaConcluida.className !== 'tarefa completed') {
            tarefaConcluida.className = 'tarefa completed';
            // tarefaConcluida.style.textDecoration = 'line-through solid black';
        } else if (tarefaConcluida.className === 'tarefa completed') {
            tarefaConcluida.className = 'tarefa';
            // tarefaConcluida.style.textDecoration = 'none';
        }       
    });
}
tarefaConcluida ()

//Inserindo botão para limpar a lista
//Botão inserido no HTML

function limparLista () {
    let btnApagaTudo = document.getElementById('apaga-tudo');

    btnApagaTudo.addEventListener('click', function () {
        //Código refatorado a partir do conteúdo deste link: https://www.w3schools.com/jsref/met_node_removechild.asp
        while (listaTarefas.hasChildNodes()) {
            listaTarefas.removeChild(listaTarefas.firstChild);
          }
    });
}
limparLista ();

//Inserindo botão para limpar concluídas
//Botão inserido no HTML
function limparConcluidas () {
    let apagaComplited = document.querySelector('#remover-finalizados');
    apagaComplited.addEventListener('click', function () {
    let completeds = document.querySelectorAll('.completed');
    // console.log(completeds)
    for (index = 0; index < completeds.length; index ++) {
        listaTarefas.removeChild(completeds[index]);
    }   
});
}
limparConcluidas ();

//Inserindo botão para salvar lista
//Botão inserido no HTML
let arrayTarefas = [];
let arrayClasses = [];
let tarefasArmazenadasString;
let arrayTarefasArmazenadas;
let arrayClassesArmazenadas;
function salvaLista () {
    const btnSalvarLista = document.querySelector('#salvar-tarefas');
    btnSalvarLista.addEventListener('click', function () {
        arrayTarefas = [];
        arrayClasses = [];
        let listaSalva = document.querySelectorAll('.tarefa');
        for (index = 0; index < listaSalva.length; index ++) {
            arrayTarefas.push(listaSalva[index].innerHTML);
        }
        for (index = 0; index < listaSalva.length; index ++) {
            arrayClasses.push(listaSalva[index].classList.value);
        }
        localStorage.removeItem('tarefas');
        localStorage.removeItem('classes', arrayClasses);
        localStorage.setItem('tarefas', arrayTarefas);
        localStorage.setItem('classes', arrayClasses);
    });
}
salvaLista ();

tarefasArmazenadasString = localStorage.getItem('tarefas');
classesArmazenadasString = localStorage.getItem('classes');
if (tarefasArmazenadasString !== null) {
    arrayTarefasArmazenadas = tarefasArmazenadasString.split(',');
    arrayClassesArmazenadas = classesArmazenadasString.split(',');
    function recuperarLista () {
        // tarefasArmazenadasString = localStorage.getItem('tarefas');
        // arrayTarefasArmazenadas = tarefasArmazenadasString.split(',');
        for (let index = 0; index < arrayTarefasArmazenadas.length; index ++) {
            let tarefa = document.createElement('li');
            tarefa.innerHTML = arrayTarefasArmazenadas[index];
            tarefa.className = arrayClassesArmazenadas[index];
            listaTarefas.appendChild(tarefa);
        }
    }
    recuperarLista ();
}

//Inserindo botão para apagar selecionada
//Botão inserido no HTML
function limparSelecionada () {
    let apagaSelecionada = document.querySelector('#remover-selecionado');
    apagaSelecionada.addEventListener('click', function () {
    let selecionadas = document.querySelectorAll('.selecionada');
    // console.log(completeds)
    for (index = 0; index < selecionadas.length; index ++) {
        listaTarefas.removeChild(selecionadas[index]);
    }   
});
}
limparSelecionada ();