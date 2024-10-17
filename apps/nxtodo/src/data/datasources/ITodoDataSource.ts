import { Todo as DomainTodo } from '../../domain/entities/Todo';

export interface ITodoDataSource {
  getTodos(): Promise<DomainTodo[]>;
  addTodo(text: string): Promise<DomainTodo>;
  toggleTodo(id: string): Promise<DomainTodo>;
  removeTodo(id: string): Promise<void>;
}
