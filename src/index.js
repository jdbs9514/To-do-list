// import _ from 'lodash';

import './style.css';

let newTask;
const arrowBtn = document.getElementById('arrow');

class Todolist {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }

  addtask(dataBase) {
    dataBase.push(this);
  }
}

arrowBtn.addEventListener('click', () => {
  const taskName = document.getElementById('input').value;
  let dataBase = JSON.parse(localStorage.getItem('baseData'));
  if (dataBase === null) {
    dataBase = [];
  }
  const index = dataBase.length + 1;
  newTask = new Todolist(taskName, false, index);
  newTask.addtask(dataBase);
  localStorage.setItem('baseData', JSON.stringify(dataBase));
  document.location.reload();
  document.preventDefault();
});

function displaytask() {
  const dataBase = JSON.parse(localStorage.getItem('baseData'));

  const unsortedList = document.querySelector('.list');

  for (let i = 0; i < dataBase.length; i += 1) {
    const list = document.createElement('li');
    list.id = i + 1;
    unsortedList.appendChild(list);

    const checkbox = document.createElement('input');
    checkbox.classList.add('check');
    checkbox.type = 'checkbox';
    list.appendChild(checkbox);

    let span = document.createElement('input');
    span.classList.add('span');
    span.type = 'text';
    span.value = dataBase[i].description;
    list.appendChild(span);

    const removeicon = document.createElement('button');
    removeicon.classList.add('remove');
    removeicon.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    list.appendChild(removeicon);

    removeicon.addEventListener('click', () => {
      dataBase.splice(i, 1);
      list.remove();
      for (let i = 0; i < dataBase.length; i += 1) {
        dataBase[i].index = i + 1;
      }
      localStorage.setItem('baseData', JSON.stringify(dataBase));
    });

    span.addEventListener('change', () => {
      span.textContent = dataBase[i].description;
      if(span.textContent === dataBase[i].description){
        span.textContent = span.value;
      }
      localStorage.setItem('baseData', JSON.stringify(dataBase));
    });
  }  
}
displaytask();


