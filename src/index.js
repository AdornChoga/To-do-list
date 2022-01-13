import './index.css';
import { loadTasks, listContainer } from './load.js';
import addTask from './add_tasks.js';
import tasksData from './local_data.js';
import updateIndexes from './update_indexes.js';
import changeTask from './change_task.js';
import checkBox from './checkbox.js';

const add = document.querySelector('.fa-upload');
const refresh = document.querySelector('.fa-sync-alt');
const clear = document.querySelector('.clear');
const input = document.querySelector('#add');

loadTasks();

refresh.addEventListener('click', () => {
  let tasks = tasksData.fetchData();
  tasks = [];
  tasksData.setData(tasks);
  loadTasks();
});

input.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    add.click();
  }
});

add.addEventListener('click', addTask);

listContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('option')) {
    event.path[1].children[1].contentEditable = true;
    event.target.style.display = 'none';
    event.path[1].lastElementChild.style.display = 'inline';
    event.path[1].classList.add('item');
  }

  if (event.target.classList.contains('task-item')) {
    event.target.children[1].contentEditable = true;
    event.target.classList.add('item');
    event.target.children[2].style.display = 'none';
    event.target.children[3].style.display = 'inline';
  }

  if (event.target.classList.contains('delete')) {
    listContainer.removeChild(event.path[1]);
    const tasks = tasksData.fetchData();
    const newTasks = tasks.filter((obj) => obj.id !== Number(event.target.id));
    tasksData.setData(newTasks);
    updateIndexes();
    loadTasks();
  }

  if (event.target.classList.contains('to-do')) {
    const { id } = event.path[1].lastElementChild;
    if (event.target.checked === true) {
      checkBox(event.target.checked, id);
      event.target.checked = true;
    } else {
      checkBox(event.target.checked, id);
      event.target.checked = false;
    }
  }
});

listContainer.addEventListener('mouseover', (event) => {
  if (event.target.classList.contains('option')) {
    event.target.style.cursor = 'all-scroll';
  }
  if (event.target.classList.contains('delete')) {
    event.target.style.cursor = 'pointer';
  }
  if (event.target.classList.contains('save')) {
    event.target.style.cursor = 'pointer';
  }
});

listContainer.addEventListener('keydown', (event) => {
  if (event.target.classList.contains('task-description')) {
    if (event.keyCode === 13) {
      event.preventDefault();
      const { id } = event.path[1].children[3];
      changeTask(event.path[1].children[1].textContent, Number(id));
      loadTasks();
    }
  }
});

clear.addEventListener('click', () => {
  let tasks = tasksData.fetchData();
  tasks = tasks.filter((task) => task.completed !== true);
  tasksData.setData(tasks);
  updateIndexes();
  loadTasks();
});

clear.addEventListener('mouseover', () => {
  clear.style.cursor = 'pointer';
});

refresh.addEventListener('mouseover', () => {
  refresh.style.cursor = 'pointer';
});