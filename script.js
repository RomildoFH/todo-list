const secaoTarefes = document.getElementById('tasks-section');
const listaTarefas = document.getElementById('lista-tarefas');
const inputCamp = document.getElementById('texto-tarefa');
const btnAdicionarTarefa = document.getElementById('criar-tarefa');

// let numClicks = 0;
// const handleClick = () => {
//   numClicks++;
//   if (numClicks === 1) {
//     singleClickTimer = setTimeout(() => {
//       numClicks = 0;
//       console.log("single click!");
//     }, 400);
//   } else if (numClicks === 2) {
//     clearTimeout(singleClickTimer);
//     numClicks = 0;
//     console.log("double click!");
//   }
// };
// document.addEventListener("click", handleClick);





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

function tarefaConcluida () {
    
    listaTarefas.addEventListener('dblclick', function (event) {
        let tarefaConcluida = event.target;
        if (tarefaConcluida.classList.contains('completed')) {
            tarefaConcluida.classList.remove('completed');
        } else {
            tarefaConcluida.classList.add('completed');
        }
    });
}
tarefaConcluida ()

//Destacando atividade selecionada com background cinza

function toTarefaSelecionada () {
        
    listaTarefas.addEventListener('click', function (event) {       
        let tarefaSelecionadaAnterior = document.getElementsByClassName('selecionada')
        for (index = 0; index < tarefaSelecionadaAnterior.length; index ++) {
            if(tarefaSelecionadaAnterior[index] !== event.target) {
                tarefaSelecionadaAnterior[index].classList.remove('selecionada');              
                // tarefa[index].style.backgroundColor = 'white';        
            }
        }        
        let tarefaSelecionada = event.target
        let listaDeClasse = tarefaSelecionada.classList
        if (listaDeClasse.contains('selecionada')){
            tarefaSelecionada.classList.remove('selecionada');
        } else {
            tarefaSelecionada.classList.add('selecionada');  
        }      
    });
}
toTarefaSelecionada ()

//Marcando atividades concluídas



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
const btnSalvarLista = document.querySelector('#salvar-tarefas');

function salvaLista () {
    
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
    
        arrayTarefas = [];
        arrayClasses = [];
        listaSalva = document.querySelectorAll('.tarefa');
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
    }
    
btnSalvarLista.addEventListener('click', salvaLista);

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

//Inserindo botões para mover-cima e mover-baixo
//Botão inserido no HTML

function moverCima () {
    let btnMoverCima = document.getElementById('mover-cima');
    btnMoverCima.addEventListener('click', function () {
        let listaDeTarefas = document.querySelector('#lista-tarefas');
        let primeiroElemento = document.querySelector('li');
        let tarefaSelecionada = document.querySelector('.selecionada');
        // console.log(listaDeTarefas)
        // console.log(primeiroElemento)
        // console.log(tarefaSelecionada)
        // console.log(tarefaSelecionada.length)
        
        if (tarefaSelecionada !== null) {
            // console.log(tarefaSelecionada)
            let elementoAnterior = tarefaSelecionada.previousSibling;
            if (tarefaSelecionada !== primeiroElemento) {
                listaDeTarefas.insertBefore(tarefaSelecionada, elementoAnterior);
            }        
        }
        salvaLista ();
    })
}
moverCima ()

function moverBaixo () {
    let btnMoverBaixo = document.getElementById('mover-baixo');
    btnMoverBaixo.addEventListener('click', function () {
        let listaDeTarefas = document.querySelector('#lista-tarefas');
        let ultimoElemento = listaDeTarefas.lastElementChild;
        let tarefaSelecionada = document.querySelector('.selecionada');
        // console.log(listaDeTarefas)
        // console.log(ultimoElemento)
        // console.log(tarefaSelecionada)
        // console.log(tarefaSelecionada.length)
        
        if (tarefaSelecionada !== null) {
            // console.log(tarefaSelecionada)
            let elementoProximo = tarefaSelecionada.nextSibling;
            if (tarefaSelecionada !== ultimoElemento) {
                listaDeTarefas.insertBefore(elementoProximo, tarefaSelecionada);
            }            
        }
        salvaLista ();
    })
}
moverBaixo ()