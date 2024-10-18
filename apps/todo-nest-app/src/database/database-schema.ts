import { serial, text, pgTable, boolean, timestamp } from 'drizzle-orm/pg-core';
import { Todo as ApiTodo } from '@nxtodo/apiInterface';
import { InferInsertModel, InferSelectModel } from 'drizzle-orm';

export const todos = pgTable('todos', {
  id: serial().primaryKey(),
  text: text(),
  completed: boolean(),
  createdAt: timestamp({ withTimezone: true }).defaultNow(),
  updatedAt: timestamp({ withTimezone: true }).defaultNow(),
});

export const databaseSchema = {
  todos,
};

export type TodoSelect = InferSelectModel<typeof todos>;
export type TodoInsert = InferInsertModel<typeof todos>;

export function mapTodoToApiTodo(todo: TodoSelect): ApiTodo {
  return {
    id: todo.id.toString(),
    text: todo.text,
    completed: todo.completed,
  };
}
