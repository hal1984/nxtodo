// apps/nxtodo/src/data/mappers/TodoMapper.ts
import { Todo as DomainTodo } from '../../domain/entities/Todo';
import { Todo as ApiTodo } from '../models/Todo';

export function mapToDomainTodo(apiTodo: ApiTodo): DomainTodo {
  return {
    id: apiTodo.id,
    text: apiTodo.text,
    completed: apiTodo.completed,
  };
}

export function mapToApiTodo(domainTodo: DomainTodo): ApiTodo {
  return {
    id: domainTodo.id,
    text: domainTodo.text,
    completed: domainTodo.completed,
  };
}
