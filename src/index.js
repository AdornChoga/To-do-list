import './index.css';
import {loadTasks,listContainer} from './load.js';
import addTask from './add_tasks';
import tasksData from './local_data.js';
import updateIndexes from './update_indexes.js';

const add = document.querySelector('.fa-upload')
const refresh = document.querySelector('.fa-sync-alt')

loadTasks();

refresh.addEventListener('click', () => {
  listContainer.innerHTML = '';
  loadTasks()
})

add.addEventListener('click', addTask)

listContainer.addEventListener('click', (event) => {
  const status = document.querySelector('.to-do');
  const descript = document.querySelector('.task-description')
  if (event.target.classList.contains('to-do')) {
    status.checked = true;
    let tasks = tasksData.fetchData();
    tasks.forEach((task) => {
    })
    
  }
  if(event.target.classList.contains('option')) {
    event.target.style.display = 'none';
    event.path[1].lastElementChild.style.display = 'inline';
    event.path[3].classList.add('item');
  }
  if (event.target.classList.contains('delete')) {
    listContainer.removeChild(event.path[3])
    let tasks = tasksData.fetchData();
    let newTasks = tasks.filter(obj => obj.id !== Number(event.target.id))
    tasksData.setData(newTasks)
    updateIndexes();
    loadTasks();
  }
})

listContainer.addEventListener('mouseover', (event) => {
  if(event.target.classList.contains('option')) {
    event.target.style.cursor = 'all-scroll'
  }
  if (event.target.classList.contains('delete')) {
    event.target.style.cursor = 'pointer'
  }
})