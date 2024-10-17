import { TodoRepository } from '../repositories/TodoRepository';

export class RemoveTodoUseCase {
  constructor(private todoRepository: TodoRepository) {}

  async execute(id: string): Promise<void> {
    return this.todoRepository.removeTodo(id);
  }
}
