/**
 * @jest-environment jsdom
 */
import changeTask from '../modules/change_task.js';

jest.mock('../modules/local_data.js');

describe('Tests for changing tasks title function', () => {
  it('should change task description of first todo', () => {
    document.body.innerHTML = `
      <span class="task-description">make dinner</span>
    `;
    const newTaskTitle = document.querySelector('.task-description').textContent;
    const index = 0;
    const newTodos = changeTask(newTaskTitle, index);
    expect(newTodos[index].description).not.toBe('todo1');
    expect(newTodos[index].description).toBe('make dinner');
  });

  it('should change task description of last todo', () => {
    document.body.innerHTML = `
      <span class="task-description">write article</span>
    `;
    const newTaskTitle = document.querySelector('.task-description').textContent;
    const index = 1;
    const newTodos = changeTask(newTaskTitle, index);
    expect(newTodos[index].description).not.toBe('todo2');
    expect(newTodos[index].description).toBe('write article');
  });
});