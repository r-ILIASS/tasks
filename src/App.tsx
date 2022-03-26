import { useState, useEffect } from "react";
// components
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
// types
import { Todo } from "./components/Model";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todo, setTodo] = useState<string>("");

  const handleAdd = (e: React.SyntheticEvent): void => {
    e.preventDefault();

    if (todo) {
      setTodos((prev) => [{ id: Date.now(), todo, isDone: false }, ...prev]);
    }
    setTodo("");
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="max-w-3xl mx-auto py-10 px-5 border flex flex-col items-center">
      <h1 className="text-2xl font-bold ">🗒 Tasks</h1>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
