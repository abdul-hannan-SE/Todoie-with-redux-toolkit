import React, { useState } from "react";
import { addTodo } from "../features/todoSlice";
import { useDispatch } from "react-redux";
function TodoForm() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const add = async () => {
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <div className="flex">
      <div></div>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button
        onClick={add}
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </div>
  );
}

export default TodoForm;
