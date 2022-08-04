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
    let tarefa = document.getElementsByClassName('tarefa');
    
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
            tarefaSelecionada.className = 'tarefa'
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

