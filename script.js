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
let tarefasArmazenadasString;
let arrayTarefasArmazenadas;
function salvaLista () {
    const btnSalvarLista = document.querySelector('#salvar-tarefas');
    btnSalvarLista.addEventListener('click', function () {
        arrayTarefas = [];
        let listaSalva = document.querySelectorAll('.tarefa');
        for (index = 0; index < listaSalva.length; index ++) {
            arrayTarefas.push(listaSalva[index].innerHTML);
        }
        localStorage.removeItem('tarefas')
        localStorage.setItem('tarefas', arrayTarefas);
        // tarefasArmazenadasString = localStorage.getItem('tarefas');
        // arrayTarefasArmazenadas = tarefasArmazenadasString.split(',');
    });
}
salvaLista ()

function recuperarLista () {
    tarefasArmazenadasString = localStorage.getItem('tarefas');
    arrayTarefasArmazenadas = tarefasArmazenadasString.split(',');
    for (let index = 0; index < arrayTarefasArmazenadas; index ++) {
        let tarefa = document.createElement('li');
        tarefa.innerHTML = arrayTarefasArmazenadas[index];
        tarefa.className = 'tarefa';
        listaTarefas.appendChild(tarefa);
    }
}
// window.onload = function () {
//     recuperarLista ()
// }

