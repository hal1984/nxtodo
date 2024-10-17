import { TodoRepository } from '../repositories/TodoRepository';
import { Todo } from '../entities/Todo';

export class ToggleTodoUseCase {
  constructor(private todoRepository: TodoRepository) {}

  async execute(id: string): Promise<Todo> {
    return this.todoRepository.toggleTodo(id);
  }
}
