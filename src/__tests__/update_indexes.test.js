import updateIndexes from '../modules/update_indexes.js';

jest.mock('../modules/local_data.js');

describe('test description', () => {
  it("all id's should be sorted in ascending order", () => {
    const todos = [
      { description: 'todo1', completed: false, id: 3 },
      { description: 'todo2', completed: false, id: 1 },
      { description: 'todo3', completed: false, id: 0 },
      { description: 'todo4', completed: false, id: 2 },
    ];
    const sortedTodos = updateIndexes(todos);
    expect(sortedTodos[0].id).toBe(0);
    expect(sortedTodos[1].id).toBe(1);
    expect(sortedTodos[2].id).toBe(2);
    expect(sortedTodos[3].id).toBe(3);
  });
});
