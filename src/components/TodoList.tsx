import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { changeTodoStatus, removeTodo } from "@/redux/store/todoSlice";
import { Todo } from "@/redux/types";
import filterTodos from "@/utility/filterTodos";
import React from "react";

export enum Filter {
  ALL = "ALL",
  COMPLETED = "COMPLETED",
  IN_PROGRESS = "IN_PROGRESS",
}

function TodoList() {
  const todos = useAppSelector((state) => state.todos.todosList);

  const [filter, setFilter] = React.useState<Filter>(Filter.ALL);
  const filteredTodos = React.useMemo(
    () => filterTodos(filter, todos),
    [todos, filter]
  );
  return (
    <ul className="flex flex-col w-full">
      <li className="p-4 mb-4 border rounded dark:border-black dark:border-2">
        <span className="text-lg">Фильтр: </span>
        <select
          className="border rounded dark:bg-gray-200 dark:border-black dark:border-2"
          onChange={(e) => setFilter(e.target.value as Filter)}
        >
          <option value={Filter.ALL}>Все</option>
          <option value={Filter.COMPLETED}>Выполненные</option>
          <option value={Filter.IN_PROGRESS}>В процессе</option>
        </select>
      </li>
      {filteredTodos.map((todo) => (
        <li key={todo.id} className="border-b dark:border-black">
          <Todo todo={todo} />
        </li>
      ))}
    </ul>
  );
}

function Todo({ todo }: { todo: Todo }) {
  const dispatch = useAppDispatch();
  function handleDeleteTodo() {
    dispatch(removeTodo(todo.id));
  }
  function handleChangeTodoStatus() {
    dispatch(changeTodoStatus(todo.id));
  }
  return (
    <div
      className={`flex items-center transition-all justify-between p-2 ${
        todo.isCompleted ? "bg-green-300" : ""
      }`}
    >
      <div className="flex items-center justify-center gap-2">
        <input
          type="checkbox"
          className="w-4 h-4 border-none shadow-inner"
          checked={todo.isCompleted}
          onChange={handleChangeTodoStatus}
        />
        <span className={todo.isCompleted ? "line-through" : ""}>
          {todo.name}
        </span>
      </div>
      <button
        className="px-2 py-1 text-red-400 transition-all bg-white border rounded-md shadow-inner dark:bg-gray-100 hover:scale-110 hover:bg-red-400 hover:text-white dark:hover:bg-red-400"
        onClick={handleDeleteTodo}
      >
        Удалить
      </button>
    </div>
  );
}

export default TodoList;
