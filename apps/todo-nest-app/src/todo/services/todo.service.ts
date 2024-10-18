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
    return mapTodoToApiTodo(createdTodos.pop());
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
    if (todos.length === 0) {
      throw new Error('Todo not found');
    }
    const todo = todos.pop();

    const updatedTodos = await this.drizzleService.db.update(databaseSchema.todos).set({
      completed: !todo.completed,
      updatedAt: new Date()
    }).where(eq(databaseSchema.todos.id, +id)).returning();
    return mapTodoToApiTodo(updatedTodos.pop());
  }
}
