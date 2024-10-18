import { Test } from '@nestjs/testing';

import { TodoService } from './todo.service';
import { DrizzleService } from '../../database/drizzle.service';
import { databaseSchema, mapTodoToApiTodo } from '../../database/database-schema';
import { TodoInsert } from '../../database/database-schema';


describe('TodoService', () => {
  let service: TodoService;
  let drizzleService: DrizzleService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        TodoService,
        {
          provide: DrizzleService,
          useValue: {
            db: {
              insert: jest.fn(),
              select: jest.fn(),
              delete: jest.fn(),
              update: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    service = moduleRef.get<TodoService>(TodoService);
    drizzleService = moduleRef.get<DrizzleService>(DrizzleService);
  });

  describe('addTodo', () => {
    it('should add a new todo and return it', async () => {
      const newTodo: TodoInsert = { text: 'Test Todo', completed: false };
      const createdTodo = { ...newTodo, id: 1 };
      jest.spyOn(drizzleService.db, 'insert').mockReturnValue({
        values: jest.fn().mockReturnValue({
          returning: jest.fn().mockResolvedValue([createdTodo]),
        }),
      } as any);

      const result = await service.addTodo('Test Todo');
      expect(result).toEqual(mapTodoToApiTodo(createdTodo as any));
    });
  });

  describe('getTodos', () => {
    it('should return a list of todos', async () => {
      const todos = [{ id: 1, text: 'Test Todo', completed: false }];
      jest.spyOn(drizzleService.db, 'select').mockReturnValue({
        from: jest.fn().mockResolvedValue(todos),
      } as any);

      const result = await service.getTodos();
      expect(result).toEqual(todos.map(mapTodoToApiTodo));
    });
  });

  describe('removeTodo', () => {
    it('should remove a todo by id', async () => {
      const deleteSpy = jest.spyOn(drizzleService.db, 'delete').mockReturnValue({
        where: jest.fn().mockResolvedValue(undefined),
      } as any);

      await service.removeTodo('1');
      expect(deleteSpy).toHaveBeenCalledWith(databaseSchema.todos);
    });
  });

  describe('toggleTodo', () => {
    it('should toggle the completion status of a todo', async () => {
      const todo = { id: 1, text: 'Test Todo', completed: false };
      const updatedTodo = { ...todo, completed: true, updatedAt: new Date() };
      jest.spyOn(drizzleService.db, 'select').mockReturnValue({
        from: jest.fn().mockReturnValue({
          where: jest.fn().mockResolvedValue([todo]),
        }),
      } as any);
      jest.spyOn(drizzleService.db, 'update').mockReturnValue({
        set: jest.fn().mockReturnValue({
          where: jest.fn().mockReturnValue({
            returning: jest.fn().mockResolvedValue([updatedTodo]),
          }),
        }),
      } as any);

      const result = await service.toggleTodo('1');
      expect(result).toEqual(mapTodoToApiTodo(updatedTodo  as any));
    });

    it('should throw an error if todo not found', async () => {
      jest.spyOn(drizzleService.db, 'select').mockReturnValue({
        from: jest.fn().mockReturnValue({
          where: jest.fn().mockResolvedValue([]),
        }),
      } as any);

      await expect(service.toggleTodo('1')).rejects.toThrow('Todo not found');
    });
  });
});

