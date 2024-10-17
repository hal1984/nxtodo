import { TodoRepository } from '../../domain/repositories/TodoRepository';
import { Todo } from '../../domain/entities/Todo';
import { ITodoDataSource } from '../datasources/ITodoDataSource';

export class TodoRepositoryImpl implements TodoRepository {
  private dataSource: ITodoDataSource;

  constructor(dataSource: ITodoDataSource) {
    this.dataSource = dataSource;
  }

  async getTodos(): Promise<Todo[]> {
    return this.dataSource.getTodos();
  }

  async addTodo(text: string): Promise<Todo> {
    return this.dataSource.addTodo(text);
  }

  async toggleTodo(id: string): Promise<Todo> {
    return this.dataSource.toggleTodo(id);
  }

  async removeTodo(id: string): Promise<void> {
    return this.dataSource.removeTodo(id);
  }
}
