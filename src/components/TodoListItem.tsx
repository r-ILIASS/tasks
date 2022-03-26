import { FiEdit, FiTrash2, FiCheck } from "react-icons/fi";
import { Todo } from "./Model";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoListItem: React.FC<Props> = ({ todo, todos, setTodos }) => {
  return (
    <form className="flex items-center w-full border rounded-md py-2 px-4 text-sm shadow-md">
      <p className="flex flex-grow">{todo.todo}</p>

      {/* control buttons container */}
      <span className="flex space-x-3">
        <FiCheck className="text-green-500" />
        <FiEdit className="text-gray-600" />
        <FiTrash2 className="text-red-500" />
      </span>
    </form>
  );
};

export default TodoListItem;
