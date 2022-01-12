import './index.css';

const tasks = [
  {description: 'read a novel', completed: false, index: 0},
  {description: 'walk the dog', completed: false, index: 1},
  {description: 'watch a movie', completed: false, index: 2}
]

const listContainer = document.querySelector('.dynamic');
const taskToAdd = document.querySelector('#add')
const add = document.querySelector('.fa-upload')
const refresh = document.querySelector('.fa-sync-alt')

refresh.addEventListener('click', () => {
  listContainer.innerHTML = '';
  loadTasks()
})

const addTask = () => {
  if (taskToAdd.value !== "") {
    console.log(taskToAdd.value)
    listContainer.innerHTML += `
    <li>
      <input type="checkbox" name="task" value="task1" class="to-do">
      <span class="task-description">${taskToAdd.value}<span>
      <i class="fas fa-ellipsis-v option"></i>
      <i class="fas fa-trash-alt delete"></i>
   </li>
    `
    taskToAdd.value = "";
  }
}

add.addEventListener('click', addTask)

function loadTasks() {
  for (let i = 0; i < tasks.length; i += 1) {
    listContainer.innerHTML += `
    <li>
      <input type="checkbox" name="task" value="task1" class="to-do">
      <span class="task-description">${tasks[i].description}<span>
      <i class="fas fa-ellipsis-v option"></i>
      <i class="fas fa-trash-alt delete"></i>
    </li>
    `
  }
  // let option = document.querySelector('.option');
  // console.log(option)
  // function changeCursor() {
  //   option.style.cursor = 'cell'
  // }
}

loadTasks()

listContainer.addEventListener('click', (event) => {
  if(event.target.classList.contains('option')) {
    event.target.style.display = 'none';
    event.path[1].lastElementChild.style.display = 'inline';
    event.path[3].classList.add('item');
  }
  if (event.target.classList.contains('delete')) {
    listContainer.removeChild(event.path[3])
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

