import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

import { TodoService } from '../services/todo.service';
import { Todo } from '@models';

@Controller('todo')
export class TodoController {
  constructor(private readonly appService: TodoService) {}

  @Get()
  async getTodos(): Promise<Todo[]> {
    return this.appService.getTodos();
  }

  @Post()
  async addTodo(@Body('text') text: string): Promise<Todo> {
    return this.appService.addTodo(text);
  }

  @Patch(':id/toggle')
  async toggleTodo(@Param('id') id: string): Promise<Todo> {
    return this.appService.toggleTodo(id);
  }

  @Delete(':id')
  async removeTodo(@Param('id') id: string): Promise<void> {
    return this.appService.removeTodo(id);
  }
}
