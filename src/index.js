// import _ from 'lodash';
import { data } from 'browserslist';
import database from 'mime-db';
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
});

function displaytask() {

  let dataBase = JSON.parse(localStorage.getItem('baseData'));

  const unsortedList = document.querySelector('.list');

  for (let i = 0; i < dataBase.length; i += 1) {

    const list = document.createElement('li');
    list.id = i+1;
    unsortedList.appendChild(list);

    const checkbox = document.createElement('input');
    checkbox.classList.add('check');
    checkbox.type = 'checkbox';
    list.appendChild(checkbox);

    const span = document.createElement('span');
    span.classList.add('span');
    span.textContent = dataBase[i].description;
    list.appendChild(span);

    const removeicon = document.createElement('button');
    removeicon.classList.add('remove');
    removeicon.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    list.appendChild(removeicon);

    removeicon.addEventListener('click', () => {
      dataBase.splice(i, 1);
      list.remove();

      localStorage.setItem('baseData', JSON.stringify(dataBase));
    });  
  }
}
displaytask();
