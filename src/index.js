// import _ from 'lodash';
import './style.css';

let input = document.getElementById('input');
let dataBase = [];

class Todolist {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }

  addtask() {
    dataBase.push(this);
  }

  displaytask() {
    const container = document.getElementById('items');

    const unsortedList = document.createElement('ul');
    unsortedList.classList.add('list');
    container.appendChild(unsortedList);

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

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && input.value !== this.description) {
    let todolist = new Todolist(description);
    todolist.displaytask();
    todolist.addtask();
  }
});


