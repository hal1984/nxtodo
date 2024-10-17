import { Injectable } from '@nestjs/common';
import { Todo } from '@nxtodo/apiInterface';

@Injectable()
export class TodoService {
  private todos: Todo[] = [];

  async addTodo(text: string): Promise<Todo> {
    const newTodo: Todo = { id: Date.now().toString(), text, completed: false };
    this.todos.push(newTodo);
    return newTodo;
  }

  async getTodos(): Promise<Todo[]> {
    return this.todos;
  }

  async removeTodo(id: string): Promise<void> {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  async toggleTodo(id: string): Promise<Todo> {
    const todo = this.todos.find(todo => todo.id === id);
    if (!todo) {
      throw new Error('Todo not found');
    }
    todo.completed = !todo.completed;
    return todo;
  }
}
