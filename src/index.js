// import _ from 'lodash';

import './style.css';

const dataBase = [];
let newTask;
const arrowBtn = document.getElementById('arrow');

class Todolist {
  constructor(description, completed) {
    this.description = description;
    this.completed = completed;
    this.index = 0;
  }

  countindex() {
    for (let i = 0; i < this.index.length; i += 1){
      return this.index++;
    }
  }

  addtask() {
    dataBase.push(this);
  }

  displaytask() {
    
    const unsortedList = document.querySelector('.list');

    const list = document.createElement('li');
    unsortedList.appendChild(list);

    const checkbox = document.createElement('input');
    checkbox.classList.add('check');
    checkbox.type = 'checkbox';
    list.appendChild(checkbox);

    const span = document.createElement('span');
    span.classList.add('span');
    span.textContent = `${this.description}`;
    list.appendChild(span);

    const removeicon = document.createElement('button');
    removeicon.classList.add('remove');
    removeicon.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    list.appendChild(removeicon);
  }
}

arrowBtn.addEventListener('click', () => {
  const taskName = document.getElementById('input').value;
  newTask = new Todolist(taskName, false);
  newTask.displaytask();
  newTask.addtask();
  newTask.countindex();
  localStorage.setItem('baseData', JSON.stringify(dataBase));
});
