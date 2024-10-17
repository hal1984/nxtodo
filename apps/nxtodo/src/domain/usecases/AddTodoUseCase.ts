import { TodoRepository } from '../repositories/TodoRepository';
import { Todo } from '../entities/Todo';

export class AddTodoUseCase {
  constructor(private todoRepository: TodoRepository) {}

  async execute(text: string): Promise<Todo> {
    return this.todoRepository.addTodo(text);
  }
}
