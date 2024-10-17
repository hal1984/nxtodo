import { Todo } from '../entities/Todo';

export interface TodoRepository {
  getTodos: () => Promise<Todo[]>;
  addTodo: (text: string) => Promise<Todo>;
  toggleTodo: (id: string) => Promise<Todo>;
  removeTodo: (id: string) => Promise<void>;
}
