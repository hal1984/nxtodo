import { Todo } from './api-interface';

describe('Todo Interface', () => {
  it('should create a Todo object correctly', () => {
    const todo: Todo = {
      id: '1',
      text: 'Test Todo',
      completed: false,
    };

    expect(todo.id).toBe('1');
    expect(todo.text).toBe('Test Todo');
    expect(todo.completed).toBe(false);
  });

  it('should allow updating the text of a Todo', () => {
    let todo: Todo = {
      id: '1',
      text: 'Initial Text',
      completed: false,
    };

    todo = { ...todo, text: 'Updated Text' };

    expect(todo.text).toBe('Updated Text');
  });

  it('should allow toggling the completed status of a Todo', () => {
    let todo: Todo = {
      id: '1',
      text: 'Test Todo',
      completed: false,
    };

    todo = { ...todo, completed: true };

    expect(todo.completed).toBe(true);
  });
});
