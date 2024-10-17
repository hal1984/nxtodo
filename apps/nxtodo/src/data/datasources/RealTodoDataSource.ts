// RealTodoDataSource.ts
import { ITodoDataSource } from './ITodoDataSource';
import { Todo as DomainTodo } from '../../domain/entities/Todo';
import { Todo as ApiTodo } from '@nxtodo/apiInterface';
import axios from 'axios';

export class RealTodoDataSource implements ITodoDataSource {
  private apiUrl = '/api/todo';

  async getTodos(): Promise<DomainTodo[]> {
    const response = await axios.get<ApiTodo[]>(this.apiUrl);
    return response.data.map(apiTodo => ({
      id: apiTodo.id,
      text: apiTodo.text,
      completed: apiTodo.completed,
    }));
  }

  async addTodo(text: string): Promise<DomainTodo> {
    const response = await axios.post<ApiTodo>(this.apiUrl, { text, completed: false });
    return {
      id: response.data.id,
      text: response.data.text,
      completed: response.data.completed,
    };
  }

  async toggleTodo(id: string): Promise<DomainTodo> {
    const response = await axios.patch<ApiTodo>(`${this.apiUrl}/${id}/toggle`);
    return {
      id: response.data.id,
      text: response.data.text,
      completed: response.data.completed,
    };
  }

  async removeTodo(id: string): Promise<void> {
    await axios.delete(`${this.apiUrl}/${id}`);
  }
}
