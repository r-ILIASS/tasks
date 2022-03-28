import React, { useState } from "react";
import { FiEdit, FiTrash2, FiCheck } from "react-icons/fi";
import { Todo } from "./Model";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  editMode: number | null;
  setEditMode: React.Dispatch<React.SetStateAction<number | null>>;
}

const TodoListItem: React.FC<Props> = ({
  todo,
  todos,
  setTodos,
  editMode,
  setEditMode,
}) => {
  const [editValue, setEditValue] = useState<string>(todo.todo);

  const handleDone = (id: number): void => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      )
    );
  };

  const toggleEdit = (id: number) => {
    setEditMode(id);
  };

  const handleEdit = (e: React.FormEvent, id: number): void => {
    e.preventDefault();

    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, todo: editValue } : item
      )
    );

    setEditMode(null);
  };

  const handleDelete = (id: number): void => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  return (
    <form
      onSubmit={(e) => handleEdit(e, todo.id)}
      className="flex items-center w-full border rounded-md py-2 px-4 text-sm shadow-md space-x-2"
    >
      {editMode === todo.id && !todo.isDone ? (
        <input
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.currentTarget.value)}
          className="flex-grow outline-none text-blue-500"
          autoFocus
        />
      ) : (
        <p className={`flex-grow ${todo.isDone && "line-through"}`}>
          {todo.todo}
        </p>
      )}

      {/* control buttons container */}
      <span className="flex space-x-3">
        <FiEdit
          onClick={() => toggleEdit(todo.id)}
          className="text-gray-600 cursor-pointer"
        />
        <FiTrash2
          onClick={() => handleDelete(todo.id)}
          className="text-red-500 cursor-pointer"
        />
        <FiCheck
          onClick={() => handleDone(todo.id)}
          className="text-green-500 cursor-pointer hover:scale-125 transition ease-out"
        />
      </span>
    </form>
  );
};

export default TodoListItem;
