import tasksData from './local_data.js';
import { listContainer, loadTasks } from './load.js';

const addTask = (taskInput) => {
  const tasks = tasksData.fetchData();
  if (taskInput.value !== '') {
    const todo = { description: taskInput.value, completed: false, id: tasks.length };
    listContainer.innerHTML += `
    <li>
      <input type="checkbox" name="task" value="task1" class="to-do">
      <span class="task-description">${taskInput.value}<span>
      <i class="fas fa-ellipsis-v option"></i>
      <i class="fas fa-trash-alt delete" id="${tasks.id}></i>
   </li>
    `;
    taskInput.value = '';
    tasks.push(todo);
    tasksData.setData(tasks);
    listContainer.innerHTML = '';
    loadTasks();
  }
};

export default addTask;