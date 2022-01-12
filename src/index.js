import './index.css';
import { loadTasks, listContainer } from './load.js';
import addTask from './add_tasks.js';
import tasksData from './local_data.js';
import updateIndexes from './update_indexes.js';
import changeTask from './change_task.js';

const add = document.querySelector('.fa-upload');
const refresh = document.querySelector('.fa-sync-alt');

loadTasks();

refresh.addEventListener('click', () => {
  listContainer.innerHTML = '';
  loadTasks();
});

add.addEventListener('click', addTask);

listContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('option')) {
    event.path[1].children[1].contentEditable = true;
    event.target.style.display = 'none';
    event.path[1].lastElementChild.style.display = 'inline-flex';
    event.path[1].classList.add('item');
  }
  if (event.target.classList.contains('delete')) {
    listContainer.removeChild(event.path[2]);
    const tasks = tasksData.fetchData();
    const newTasks = tasks.filter((obj) => obj.id !== Number(event.target.id));
    tasksData.setData(newTasks);
    updateIndexes();
    loadTasks();
  }
  if (event.target.classList.contains('save')) {
    const { id } = event.path[2].lastElementChild.children[1];
    changeTask(event.path[2].children[1].textContent, Number(id));
    loadTasks();
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