import React, { useEffect } from 'react';
import { useTodoStore } from '../../domain/store/todoStore';
import { Check, Trash2 } from 'lucide-react';

const TodoList: React.FC = () => {
  const { todos, toggleTodo, removeTodo, getTodos, isLoading, error } = useTodoStore();

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex items-center justify-between bg-white p-3 rounded-lg shadow"
        >
          <div className="flex items-center space-x-3">
            <button
              onClick={() => toggleTodo(todo.id)}
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                todo.completed ? 'bg-green-500 border-green-500' : 'border-gray-300'
              }`}
            >
              {todo.completed && <Check size={16} className="text-white" />}
            </button>
            <span className={todo.completed ? 'line-through text-gray-500' : ''}>
              {todo.text}
            </span>
          </div>
          <button
            onClick={() => removeTodo(todo.id)}
            className="text-red-500 hover:text-red-700"
          >
            <Trash2 size={18} />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
