// import _ from 'lodash';
import './style.css';

let input = document.getElementById('input');
let dataBase = [];
let newTask;

class Todolist {
  contstructor() {
    this.task = task;
  }

  addTask() {
    dataBase.push(this);
  }

  displayTask() {
    const containerList = document.getElementById('items');

    const unsortedList = document.createElement('ul');
    unsortedList.classList.add('list');
    containerList.appendChild(unsortedList);

    const List = document.createElement('li');
    List.classList.add('element');
    unsortedList.appendChild(List);

    const checkBox = document.createElement('input');
    checkBox.classList.add('check');
    checkBox.type = 'checkbox';
    List.appendChild(checkBox);

    const text = document.createElement('p');
    text.classList.add('text');
    text.textContent = `"${this.task}"`;
    List.appendChild(text);

    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove');
    removeBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    List.appendChild(removeBtn);

    removeBtn.addEventListener('click', (e) => {
      const parentBtn = e.target.ParentNode;
      dataBase = dataBase.filter((x) => (x.task !== this.task));
      parentBtn.parentElement.remove();

      localStorage.setItem('baseData', JSON.stringify(dataBase));
    });
  }
}

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && input.value) {
    input = document.getElementById('input').value;
    newTask = new Todolist(input);
    newTask.addTask();
    newTask.displayTask();
  }
  localStorage.setItem('baseData', JSON.stringify(dataBase));
});

if (localStorage.getItem('baseData')) {
  dataBase = JSON.parse(localStorage.getItem('baseData'));
  for (let i = 0; i < dataBase.length; i += 1) {
    newTask = new Todolist(dataBase[i].task);
    newTask.displayTask();
  }
}