import { Todo as DomainTodo } from '../../domain/entities/Todo';
import { Todo as ApiTodo } from '@models';
import { mapToDomainTodo } from '../mappers/TodoMapper';
import { ITodoDataSource } from './ITodoDataSource';

export class MockTodoDataSource implements ITodoDataSource {
  private todos: ApiTodo[] = [];

  async getTodos(): Promise<DomainTodo[]> {
    return this.todos.map(mapToDomainTodo);
  }

  async addTodo(text: string): Promise<DomainTodo> {
    const newTodo: ApiTodo = { id: Date.now().toString(), text, completed: false };
    this.todos.push(newTodo);
    return mapToDomainTodo(newTodo);
  }

  async toggleTodo(id: string): Promise<DomainTodo> {
    const todo = this.todos.find(t => t.id === id);
    if (!todo) {
      throw new Error('Todo not found');
    }
    todo.completed = !todo.completed;
    return mapToDomainTodo(todo);
  }

  async removeTodo(id: string): Promise<void> {
    const index = this.todos.findIndex(t => t.id === id);
    if (index === -1) {
      throw new Error('Todo not found');
    }
    this.todos.splice(index, 1);
  }
}
