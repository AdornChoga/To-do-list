export default class tasksData {
  static todos = [
    { description: 'todo1', completed: false, id: 0 },
    { description: 'todo2', completed: false, id: 1 },
  ];

  static fetchData() {
    return this.todos;
  }

  static setData(data) {
    // console.log(data)
    this.todo = data;
  }
}