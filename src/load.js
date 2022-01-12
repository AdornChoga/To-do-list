const tasks = [
  {description: 'read a novel', completed: false, index: 0},
  {description: 'walk the dog', completed: false, index: 1},
  {description: 'watch a movie', completed: false, index: 2}
]

const listContainer = document.querySelector('.dynamic');


export default function loadTasks() {
  for (let i = 0; i < tasks.length; i += 1) {
    listContainer.innerHTML += `
    <li>
      <input type="checkbox" name="task" value="task1" class="to-do">
      <span class="task-description">${tasks[i].description}<span>
      <i class="fas fa-ellipsis-v option"></i>
      <i class="fas fa-trash-alt delete" id="${tasks[i].id}"></i>
    </li>
    `
  }  
}