import { container } from './Container';
import { TodoRepositoryImpl } from '../data/repositories/TodoRepositoryImpl';
import { AddTodoUseCase } from '../domain/usecases/AddTodoUseCase';
import { GetTodosUseCase } from '../domain/usecases/GetTodosUseCase';
import { RemoveTodoUseCase } from '../domain/usecases/RemoveTodoUseCase';
import { ToggleTodoUseCase } from '../domain/usecases/ToggleTodoUseCase';

describe('Container', () => {
  it('should be a singleton', () => {
    const instance1 = container;
    const instance2 = container;
    expect(instance1).toBe(instance2);
  });

  it('should initialize todoRepository correctly', () => {
    expect(container.todoRepository).toBeInstanceOf(TodoRepositoryImpl);
  });

  it('should initialize addTodoUseCase correctly', () => {
    expect(container.addTodoUseCase).toBeInstanceOf(AddTodoUseCase);
  });

  it('should initialize getTodosUseCase correctly', () => {
    expect(container.getTodosUseCase).toBeInstanceOf(GetTodosUseCase);
  });

  it('should initialize toggleTodoUseCase correctly', () => {
    expect(container.toggleTodoUseCase).toBeInstanceOf(ToggleTodoUseCase);
  });

  it('should initialize removeTodoUseCase correctly', () => {
    expect(container.removeTodoUseCase).toBeInstanceOf(RemoveTodoUseCase);
  });
});
