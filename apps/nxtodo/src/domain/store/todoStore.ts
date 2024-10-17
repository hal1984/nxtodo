import { create } from 'zustand';
import { Todo } from '../entities/Todo';
import { container } from '../../di/Container';

interface TodoState {
  todos: Todo[];
  isLoading: boolean;
  error: string | null;
  addTodo: (text: string) => Promise<void>;
  toggleTodo: (id: string) => Promise<void>;
  removeTodo: (id: string) => Promise<void>;
  getTodos: () => Promise<Todo[]>;
}

const addTodoUseCase = container.addTodoUseCase;
const getTodosUseCase = container.getTodosUseCase;
const toggleTodoUseCase = container.toggleTodoUseCase;
const removeTodoUseCase = container.removeTodoUseCase;

export const useTodoStore = create<TodoState>((set, get) => ({
  todos: [],
  isLoading: false,
  error: null,

  addTodo: async (text: string) => {
    set({ isLoading: true, error: null });
    try {
      const newTodo = await addTodoUseCase.execute(text);
      set((state) => ({ todos: [...state.todos, newTodo], isLoading: false }));
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false });
    }
  },

  toggleTodo: async (id: string) => {
    set({ isLoading: true, error: null });
    try {
      const updatedTodo = await toggleTodoUseCase.execute(id);
      set((state) => ({
        todos: state.todos.map((todo) => todo.id === id ? updatedTodo : todo),
        isLoading: false
      }));
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false });
    }
  },

  removeTodo: async (id: string) => {
    set({ isLoading: true, error: null });
    try {
      await removeTodoUseCase.execute(id);
      set((state) => ({
        todos: state.todos.filter((todo) => todo.id !== id),
        isLoading: false
      }));
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false });
    }
  },

  getTodos: async () => {
    set({ isLoading: true, error: null });
    try {
      const todos = await getTodosUseCase.execute();
      set({ todos, isLoading: false });
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false });
    }
    return get().todos;
  },
}));
