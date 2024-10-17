import { Test, TestingModule } from '@nestjs/testing';
import { TodoController } from './todo.controller';
import { TodoService } from '../services/todo.service';

jest.mock('../services/todo.service');

describe('TodoController', () => {
  let app: TestingModule;
  let todoService: jest.Mocked<TodoService>;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [TodoController],
      providers: [TodoService],
    }).compile();

    todoService = app.get<TodoService>(TodoService) as jest.Mocked<TodoService>;
  });

  describe('getTodos', () => {
    it('should return a list of todos', async () => {
      const mockTodos = [{ id: '1', text: 'Test Todo', completed: false }];
      todoService.getTodos.mockResolvedValue(mockTodos);

      const appController = app.get<TodoController>(TodoController);
      expect(await appController.getTodos()).toEqual(mockTodos);
    });
  });

  describe('addTodo', () => {
    it('should add a new todo', async () => {
      const newTodo = { id: '2', text: 'New Todo', completed: false };
      todoService.addTodo.mockResolvedValue(newTodo);

      const appController = app.get<TodoController>(TodoController);
      expect(await appController.addTodo('New Todo')).toEqual(newTodo);
    });
  });

  describe('toggleTodo', () => {
    it('should toggle the completion status of a todo', async () => {
      const toggledTodo = { id: '1', text: 'Test Todo', completed: true };
      todoService.toggleTodo.mockResolvedValue(toggledTodo);

      const appController = app.get<TodoController>(TodoController);
      expect(await appController.toggleTodo('1')).toEqual(toggledTodo);
    });
  });

  describe('removeTodo', () => {
    it('should remove a todo', async () => {
      todoService.removeTodo.mockResolvedValue(undefined);

      const appController = app.get<TodoController>(TodoController);
      expect(await appController.removeTodo('1')).toBeUndefined();
    });
  });
});
