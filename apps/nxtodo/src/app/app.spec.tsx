import { render } from '@testing-library/react';
import App from './app';
import { useTodoStore } from '../domain/store/todoStore';

jest.mock('../domain/store/todoStore');

describe('App', () => {

  const mockUseTodoStore = useTodoStore as jest.MockedFunction<typeof useTodoStore>;

  beforeEach(() => {
    mockUseTodoStore.mockReturnValue({
      todos: [],
      toggleTodo: jest.fn(),
      removeTodo: jest.fn(),
      getTodos: jest.fn(),
      isLoading: false,
      error: null
    });
  });

  it('should render successfully', () => {
      const { baseElement } = render(<App />);
      expect(baseElement).toBeTruthy();
  });
});
