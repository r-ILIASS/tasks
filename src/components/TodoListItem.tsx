import { FiEdit, FiTrash2, FiCheck } from "react-icons/fi";
import { Todo } from "./Model";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoListItem: React.FC<Props> = ({ todo, todos, setTodos }) => {
  // Flag a todo item as done
  const handleDone = (id: number): void => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      )
    );
  };

  return (
    <form className="flex items-center w-full border rounded-md py-2 px-4 text-sm shadow-md">
      <p className={`flex flex-grow ${todo.isDone && "line-through"}`}>
        {todo.todo}
      </p>

      {/* control buttons container */}
      <span className="flex space-x-3">
        <FiCheck
          onClick={() => handleDone(todo.id)}
          className="text-green-500 cursor-pointer hover:scale-125 transition ease-out"
        />
        <FiEdit className="text-gray-600 cursor-pointer" />
        <FiTrash2 className="text-red-500 cursor-pointer" />
      </span>
    </form>
  );
};

export default TodoListItem;
