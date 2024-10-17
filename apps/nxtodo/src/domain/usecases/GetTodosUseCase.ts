import { TodoRepository } from '../repositories/TodoRepository';
import { Todo } from '../entities/Todo';

export class GetTodosUseCase {
  constructor(private todoRepository: TodoRepository) {}

  async execute(): Promise<Todo[]> {
    return this.todoRepository.getTodos();
  }
}
