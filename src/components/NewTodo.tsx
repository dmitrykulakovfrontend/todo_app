import { useAppDispatch } from "@/redux/hooks";
import { createTodo } from "@/redux/store/todoSlice";
import React, { useState } from "react";

type Props = {};

function NewTodo({}: Props) {
  const dispatch = useAppDispatch();
  const [newTodo, setNewTodo] = useState("");
  function handleTodoCreate(name: string) {
    dispatch(createTodo(name));
    setNewTodo("");
  }
  return (
    <div className="flex gap-4">
      <input
        className="px-4 py-2 border-2 rounded-lg shadow-inner dark:bg-gray-200 placeholder:text-gray-400"
        value={newTodo}
        placeholder="Сходить в магазин..."
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button
        onClick={() => handleTodoCreate(newTodo)}
        className="px-4 py-2 transition-all bg-white border-2 rounded-lg shadow-inner dark:bg-gray-200 hover:scale-110 hover:bg-white/70"
      >
        Добавить
      </button>
    </div>
  );
}

export default NewTodo;
