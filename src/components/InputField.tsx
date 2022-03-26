interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.SyntheticEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  return (
    <form
      onSubmit={(e) => handleAdd(e)}
      className="w-[584px] flex relative mt-10"
    >
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="text"
        placeholder="What's on your mind?"
        className="w-full border pr-3 pl-5 py-3 rounded-xl shadow-md"
      />
      <button
        type="submit"
        className="absolute right-[10px] self-center rounded-full w-8 h-8 flex items-center justify-center text-white bg-blue-500"
      >
        +
      </button>
    </form>
  );
};

export default InputField;
