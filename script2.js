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
const btnRemoveAll = document.getElementById('apaga-tudo');
const btnRemoveCompleted = document.getElementById('remover-finalizados');

const formatDate = () => {
  let quando = whenInput.value;
  const dataFormatada = quando.split('-');
  quando = `${dataFormatada[2]}-${dataFormatada[1]}-${dataFormatada[0]}`;
  return (quando);
};

function adicionarTarefa() {
  const table = document.getElementById('tabela-tarefas');
  const row = table.insertRow(table.rows.length);
  row.className = 'data-rows';
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  const cell3 = row.insertCell(2);
  const cell4 = row.insertCell(3);
  const cell5 = row.insertCell(4);
  const cell6 = row.insertCell(5);
  const cell7 = row.insertCell(6);
  const cell8 = row.insertCell(7);
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
  cell6.innerHTML = formatDate();
  cell6.className = 'cells';
  cell7.innerHTML = muchInput.value;
  cell7.className = 'cells';
  cell8.innerHTML = 'Pendente';
  cell8.className = 'cells';
  whatInput.value = '';
  howInput.value = '';
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
  const tableRows = document.querySelectorAll('.data-rows');
  for (let index = 0; index < tableRows.length; index += 1) {
    const filhos = tableRows[index].children;
    const rowCells = [];
    for (let index2 = 0; index2 < filhos.length; index2 += 1) {
      rowCells.push(filhos[index2].innerHTML);
    }
    rowCells.push(tableRows[index].classList);
    localStorage.setItem(`${index + 1} tableRow`, rowCells);
  }
});

const recuperaLista = () => {
  const arrayInfo = Object.entries(localStorage);
  arrayInfo.forEach((element) => {
    const rowData = element[1].split(',');
    // console.log (rowData);
    const table = document.getElementById('tabela-tarefas');
    const row = table.insertRow(table.rows.length);
    row.classList = rowData[rowData.length - 1];
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    const cell5 = row.insertCell(4);
    const cell6 = row.insertCell(5);
    const cell7 = row.insertCell(6);
    const cell8 = row.insertCell(7);
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
    cell8.innerHTML = rowData[7];
    cell8.className = 'cells';
  });
};
window.onload = () => {
  setTimeout(recuperaLista, 500);
};

// Inserindo classe selecionada:
tabelaTarefas.addEventListener('click', (event) => {
  const allSelected = document.querySelectorAll('.selecionada');
  const rowSelected = event.target.parentElement;
  for (let index = 0; index < allSelected.length; index += 1) {
    if (allSelected[index] !== rowSelected) {
      allSelected[index].classList.remove('selecionada');
    }
  }
  const listaClasses = rowSelected.classList;
  if (listaClasses.contains('selecionada')) {
    rowSelected.classList.remove('selecionada');
  } else {
    rowSelected.classList.add('selecionada');
  }
});

// Concluíndo tarefas com click duplo:
tabelaTarefas.addEventListener('dblclick', (event) => {
  const tarefaConcluida = event.target.parentElement;
  const listaClasses = tarefaConcluida.classList;
  if (listaClasses.contains('completed')) {
    tarefaConcluida.classList.remove('completed');
    tarefaConcluida.lastChild.innerHTML = 'Pendente';
  } else {
    tarefaConcluida.classList.add('completed');
    tarefaConcluida.lastChild.innerHTML = 'Concluída';
  }
});

// Removendo tarefa selecionada
btnRemover.addEventListener('click', () => {
  const allSelected = document.getElementsByClassName('selecionada');
  const tableBody = document.querySelectorAll('tbody');
  // console.log(tableBody[0].children.length)
  for (let index = 0; index < tableBody[0].children.length; index += 1) {
    if (allSelected[0] === tableBody[0].children[index]) {
      tableBody[0].removeChild(tableBody[0].children[index]);
    }
  }
});

// Botão limpar lista:
btnRemoveAll.addEventListener('click', () => {
  const tableBody = document.querySelectorAll('tbody');
  while (tableBody[0].children.length > 1) {
    tableBody[0].removeChild(tableBody[0].children[1]);
  }
});

btnRemoveCompleted.addEventListener('click', () => {
  const tableBody = document.querySelectorAll('tbody');
  for (let cont = 0; cont < tableBody[0].children.length; cont += 1) {
    for (let index = 0; index < tableBody[0].children.length; index += 1) {
      if (tableBody[0].children[index].classList.contains('completed')) {
        tableBody[0].removeChild(tableBody[0].children[index]);
      }
    }
  }
});

// Criando relógio digital
const time = () => {
  const date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  hour < 10 ? hour = `0${hour}` : hour = hour;
  minute < 10 ? minute = `0${minute}` : minute = minute;
  second < 10 ? second = `0${second}` : second = second;
  document.getElementById('digital-clock').innerText = `${hour} : ${minute} : ${second}`;
};

const getDate = () => {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth();
  const year = date.getFullYear();
  day < 10 ? day = `0${day}` : day = day;
  month < 12 ? month += 1 : month = month;
  month < 10 ? month = `0${month}` : month = month;
  document.getElementById('data-atual').innerText = `${day} / ${month} / ${year}`;
};
setInterval(() => {
  time();
  getDate();
}, 1000);
