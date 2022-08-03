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

function classeTarefaSelecionada () {
    let tarefa = document.getElementsByClassName('tarefa');
    listaTarefas.addEventListener('click', function (event) {        
        for (index = 0; index < tarefa.length; index ++) {
            tarefa[index].className = 'tarefa';  
            tarefa[index].style.backgroundColor = 'white';        
        }        
        let tarefaSelecionada = event.target
        tarefaSelecionada.className = 'tarefa selecionada';
        tarefaSelecionada.style.backgroundColor = 'gray';        
    });
}
classeTarefaSelecionada ();

