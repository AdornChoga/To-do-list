import tasksData from './local_data.js';

const updateIndexes = (tasks) => {
  tasks.forEach((task) => {
    task.id = tasks.indexOf(task);
  });
  tasksData.setData(tasks);
  return tasks;
};

export default updateIndexes;
