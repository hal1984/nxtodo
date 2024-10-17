import { Test } from '@nestjs/testing';

import { TodoService } from './todo.service';

describe('TodoService', () => {
  let service: TodoService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [TodoService],
    }).compile();

    service = app.get<TodoService>(TodoService);
  });

  describe('getData', () => {
    it('should return "Hello API"', () => {
      expect(service).toEqual(service);
    });
  });
});
