import tasksData from './local_data.js';

export default function checkBox(bool, id) {
  const tasks = tasksData.fetchData();
  tasks[id].completed = bool;
  tasksData.setData(tasks);
  return tasksData.fetchData();
}