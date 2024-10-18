import { Injectable } from '@nestjs/common';
import { mapTodoToApiTodo, TodoInsert } from '../../database/database-schema';
import { Todo as ApiTodo } from '@nxtodo/apiInterface';
import { DrizzleService } from '../../database/drizzle.service';
import { databaseSchema } from '../../database/database-schema';
import { eq } from 'drizzle-orm';

@Injectable()
export class TodoService {

  constructor(private drizzleService: DrizzleService) {}

  async addTodo(text: string): Promise<ApiTodo> {
    const newTodo: TodoInsert = { text, completed: false};
    console.log('newTodo', newTodo);
    const createdTodos = await this.drizzleService.db.insert(databaseSchema.todos).values(newTodo).returning();
    const createdTodo = createdTodos.pop();
    if (!createdTodo) {
      throw new Error('Failed to create todo');
    }
    return mapTodoToApiTodo(createdTodo);
  }

  async getTodos(): Promise<ApiTodo[]> {
    const todos = await this.drizzleService.db.select().from(databaseSchema.todos);
    return todos.map(mapTodoToApiTodo);
  }

  async removeTodo(id: string): Promise<void> {
    await this.drizzleService.db.delete(databaseSchema.todos).where(eq(databaseSchema.todos.id, +id));
  }

  async toggleTodo(id: string): Promise<ApiTodo> {
    const todos = await this.drizzleService.db.select().from(databaseSchema.todos).where(eq(databaseSchema.todos.id, +id));
    const todo = todos.pop();

    if (!todo) {
      throw new Error('Todo not found');
    }

    const updatedTodos = await this.drizzleService.db.update(databaseSchema.todos).set({
      completed: !todo.completed,
      updatedAt: new Date()
    }).where(eq(databaseSchema.todos.id, +id)).returning();

    const updatedTodo = updatedTodos.pop();
    if (!updatedTodo) {
      throw new Error('Failed to update todo');
    }

    return mapTodoToApiTodo(updatedTodo);
  }
}
