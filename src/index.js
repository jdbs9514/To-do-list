// import _ from 'lodash';
import './style.css';

let input = document.getElementById('input');
const unsortedList = document.getElementById('list');
let dataBase = [];
let newTask;

class Todolist {
  contstructor(task) {
    this.task = task;
  }

  addTask() {
    dataBase.push(this);
  }

  displayTask() {
    const List = document.createElement('li');
    List.classList.add('element');
    unsortedList.appendChild(List);

    const checkBox = document.createElement('input');
    checkBox.classList.add('check');
    checkBox.type = 'checkbox';
    checkBox.text = `"${this.task}"`;
    List.appendChild(checkBox);

    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove');
    removeBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

    removeBtn.addEventListener('click', (e) => {
      const parentBtn = e.target.ParentNode;
      dataBase = dataBase.filter((x) => (x.task !== this.task));
      parentBtn.parentElement.remove();

      localStorage.setItem('baseData', JSON.stringify(dataBase));
    });
  }
}

input.addEventListener('keypress', () => {
  input = document.getElementById('input').value;
  newTask = new Todolist(input);
  newTask.addTask();
  newTask.displayTask();

  localStorage.setItem('baseData', JSON.stringify(dataBase));
});