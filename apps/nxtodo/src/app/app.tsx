import TodoList from '../presentation/components/TodoList';
import AddTodo from '../presentation/components/AddTodo';
import { CheckSquare } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <div className="flex items-center justify-center mb-6">
          <CheckSquare size={32} className="text-blue-500 mr-2" />
          <h1 className="text-2xl font-bold text-gray-800">Todo App</h1>
        </div>
        <AddTodo />
        <div className="mt-6">
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
