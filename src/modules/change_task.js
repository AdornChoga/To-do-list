import tasksData from './local_data.js';

export default function changeTask(text, index) {
  const tasks = tasksData.fetchData();
  tasks[index].description = text;
  tasksData.setData(tasks);
}