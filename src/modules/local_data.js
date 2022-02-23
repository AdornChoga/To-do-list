export default class tasksData {
  static fetchData() {
    return JSON.parse(localStorage.getItem('tasks'));
  }

  static setData(data) {
    localStorage.setItem('tasks', JSON.stringify(data));
  }
}