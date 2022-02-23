import checkBox from '../modules/checkbox.js';

jest.mock('../modules/local_data.js');

describe('Tests for toggling-checkbox functionality', () => {
  it('should change first todo to completed state', () => {
    const index = 0;
    const newTodos = checkBox(true, index);
    expect(newTodos[index].completed).not.toBe(false);
    expect(newTodos[index].completed).toBe(true);
  });

  it('should change last todo to completed state', () => {
    const index = 1;
    const newTodos = checkBox(true, index);
    expect(newTodos[index].completed).not.toBe(false);
    expect(newTodos[index].completed).toBe(true);
  });
  it('should change first to do to non-completed state', () => {
    const index = 0;
    const newTodos = checkBox(false, index);
    expect(newTodos[index].completed).not.toBe(true);
    expect(newTodos[index].completed).toBe(false);
  });
  it('should change last to do to non-completed state', () => {
    const index = 1;
    const newTodos = checkBox(false, index);
    expect(newTodos[index].completed).not.toBe(true);
    expect(newTodos[index].completed).toBe(false);
  });
});