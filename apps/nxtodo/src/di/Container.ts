import { MockTodoDataSource } from "../data/datasources/MockTodoDataSource";
import { RealTodoDataSource } from "../data/datasources/RealTodoDataSource";
import { TodoRepositoryImpl } from "../data/repositories/TodoRepositoryImpl";
import { TodoRepository } from "../domain/repositories/TodoRepository";
import { AddTodoUseCase } from "../domain/usecases/AddTodoUseCase";
import { GetTodosUseCase } from "../domain/usecases/GetTodosUseCase";
import { RemoveTodoUseCase } from "../domain/usecases/RemoveTodoUseCase";
import { ToggleTodoUseCase } from "../domain/usecases/ToggleTodoUseCase";


class Container {
  private static instance: Container;

  public todoRepository: TodoRepository;
  public addTodoUseCase: AddTodoUseCase;
  public getTodosUseCase: GetTodosUseCase;
  public toggleTodoUseCase: ToggleTodoUseCase;
  public removeTodoUseCase: RemoveTodoUseCase;

  private constructor() {
    const dataSource = new RealTodoDataSource();
    this.todoRepository = new TodoRepositoryImpl(dataSource);
    this.addTodoUseCase = new AddTodoUseCase(this.todoRepository);
    this.getTodosUseCase = new GetTodosUseCase(this.todoRepository);
    this.toggleTodoUseCase = new ToggleTodoUseCase(this.todoRepository);
    this.removeTodoUseCase = new RemoveTodoUseCase(this.todoRepository);
  }

  public static getInstance(): Container {
    if (!Container.instance) {
      Container.instance = new Container();
    }
    return Container.instance;
  }
}

export const container = Container.getInstance();
