import { useState } from "react";
import { Todo } from "./Model";
import TodoListItem from "./TodoListItem";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  const [editMode, setEditMode] = useState<number | null>(null);

  return (
    <div className="w-[584px] mt-10 py-5 flex flex-col space-y-3">
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          todos={todos}
          setTodos={setTodos}
          editMode={editMode}
          setEditMode={setEditMode}
        />
      ))}
    </div>
  );
};

export default TodoList;
