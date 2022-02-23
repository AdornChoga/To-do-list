import tasksData from './local_data.js';

const loadTasks = (listContainer) => {
  listContainer.innerHTML = '';
  if (localStorage.getItem('tasks') === null) {
    tasksData.setData([]);
  }
  const tasks = tasksData.fetchData();
  for (let i = 0; i < tasks.length; i += 1) {
    listContainer.innerHTML += `
    <li class="task-item">
      <input type="checkbox" name="task" value="task1" class="to-do"
      ${tasks[i].completed === true ? 'checked' : ''}>
      <span class="task-description" >${tasks[i].description}</span>
      <i class="fas fa-ellipsis-v option"></i>
      <i class="fas fa-trash-alt delete" id="${tasks[i].id}"></i>
    </li>
    `;
  }
  const todos = document.querySelectorAll('.task-description');
  tasks.forEach((task, index) => {
    if (task.completed) {
      todos[index].style.textDecoration = 'line-through';
      todos[index].style.opacity = '0.5';
    }
  });
};

export default loadTasks;