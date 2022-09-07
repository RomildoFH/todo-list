const whatInput = document.getElementById('what-input');
const whyInput = document.getElementById('why-input');
const whereInput = document.getElementById('where-input');
const whenInput = document.getElementById('when-input');
const whoInput = document.getElementById('who-input');
const howInput = document.getElementById('how-input');
const muchInput = document.getElementById('how-much-input');
const btnAdicionar = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const btnSalvar = document.getElementById('salvar-tarefas');
const tabelaTarefas = document.getElementById('tabela-tarefas');
const btnRemover = document.getElementById('remover-selecionado');


function adicionarTarefa() {
  let table = document.getElementById("tabela-tarefas");
  let row = table.insertRow(table.rows.length);
  row.className = 'data-rows';
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);
  let cell5 = row.insertCell(4);
  let cell6 = row.insertCell(5);
  let cell7 = row.insertCell(6);
  cell1.innerHTML = whatInput.value;
  cell1.className = 'cells';
  cell2.innerHTML = howInput.value; 
  cell2.className = 'cells';
  cell3.innerHTML = whyInput.value;
  cell3.className = 'cells';
  cell4.innerHTML = whereInput.value;
  cell4.className = 'cells';
  cell5.innerHTML = whoInput.value;
  cell5.className = 'cells';
  cell6.innerHTML = whenInput.value;
  cell6.className = 'cells';
  cell7.innerHTML = muchInput.value;  
  cell7.className = 'cells';
  whatInput.value = '';
  whyInput.value = '';
  whereInput.value = '';
  whoInput.value = '';
  whenInput.value = '';
  muchInput.value = '';
}

btnAdicionar.addEventListener('click', () => {
  adicionarTarefa();

});

btnSalvar.addEventListener('click', () => {
  localStorage.clear();
  let tableRows = document.querySelectorAll('.data-rows');
  for (let index = 0; index < tableRows.length; index += 1) {
    const filhos = tableRows[index].children
    let tableCells = []
    for (let index2 = 0; index2 < filhos.length; index2 += 1) {
      tableCells.push(filhos[index2].innerHTML);
    }
    localStorage.setItem(`tableRow ${index}`, tableCells);
    // console.log(tableRows)
  }
});

const recuperaLista = () => {
  let arrayInfo = Object.entries(localStorage);
  arrayInfo.forEach((element) => {
    const rowData = element[1].split(',');
    // console.log (rowData);
    let table = document.getElementById("tabela-tarefas");
    let row = table.insertRow(table.rows.length);
    row.className = 'data-rows';    
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);
    let cell7 = row.insertCell(6);
    cell1.innerHTML = rowData[0];
    cell1.className = 'cells';
    cell2.innerHTML = rowData[1]; 
    cell2.className = 'cells';
    cell3.innerHTML = rowData[2];
    cell3.className = 'cells';
    cell4.innerHTML = rowData[3];
    cell4.className = 'cells';
    cell5.innerHTML = rowData[4];
    cell5.className = 'cells';
    cell6.innerHTML = rowData[5];
    cell6.className = 'cells';
    cell7.innerHTML = rowData[6];  
    cell7.className = 'cells';
  })
  // console.log(arrayInfo);
}
window.onload = () => {
  setTimeout(recuperaLista, 500);
}

// Inserindo classe selecionada:
tabelaTarefas.addEventListener('click', function (event) {
  let allSelected = document.querySelectorAll('.selecionada');
  let rowSelected = event.target.parentElement;
  // console.log(allSelected);
  for (let index = 0; index < allSelected.length; index += 1) {
    if(allSelected[index] !== rowSelected){
      allSelected[index].classList.remove('selecionada');
    }
  }
  let listaClasses = rowSelected.classList;
  if(listaClasses.contains('selecionada')) {
    rowSelected.classList.remove('selecionada');
  } else {
    rowSelected.classList.add('selecionada');
    // console.log(rowSelected);
  }
})

// Concluíndo tarefas com click duplo:
tabelaTarefas.addEventListener('dblclick', (event) => {
  let tarefaConcluida = event.target.parentElement;
  let listaClasses = tarefaConcluida.classList;
  if( listaClasses.contains('completed')) {
    tarefaConcluida.classList.remove('completed');
  } else {
    tarefaConcluida.classList.add('completed');
  }
})

// Removendo tarefa selecionada
btnRemover.addEventListener('click', () => {
  let allSelected = document.getElementsByClassName('selecionada');
  let tableBody = document.querySelectorAll("tbody");
  console.log(tableBody[0].children.length)
  for (let index = 0; index < tableBody[0].children.length; index += 1) {
    if(allSelected[0] === tableBody[0].children[index]) {
      tableBody[0].removeChild(tableBody[0].children[index]);
    }
  }
  console.log(allSelected);
  console.log(tableBody[0].children);
  // console.log(allSelected[0] === tableBody[0].children[3]);
})


