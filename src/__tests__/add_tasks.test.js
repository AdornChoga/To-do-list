/**
 * @jest-environment jsdom
 */
import addTask from '../modules/add_tasks.js';

jest.mock('../modules/local_data.js');

describe('Tests for add tasks when input value is not empty', () => {
  document.body.innerHTML = `
    <input type="text" id="add" placeholder="Add to your list..." value="todo3">
  `;
  const listContainer = document.createElement('ul');
  const taskToAdd = document.querySelector('#add');

  it('list container should have zero items', () => {
    expect(listContainer.childElementCount).toBe(0);
  });

  it('Input value should be todo3', () => {
    expect(taskToAdd.value).toBe('todo3');
  });

  it('list container should have three items', () => {
    addTask(taskToAdd, listContainer);
    expect(listContainer.childElementCount).toBe(3);
  });

  it('Input value should be an empty string', () => {
    addTask(taskToAdd, listContainer);
    expect(taskToAdd.value).toBe('');
  });
});