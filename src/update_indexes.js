import tasksData from './local_data.js';

export default function updateIndexes() {
  const tasks = tasksData.fetchData();
  tasks.forEach((task) => {
    task.id = tasks.indexOf(task);
    tasksData.setData(tasks);
  });
}
