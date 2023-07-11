"use client";
import NewTodo from "@/components/NewTodo";
import TodoList from "@/components/TodoList";
import { useAppSelector } from "@/redux/hooks";
export default function Home() {
  const todos = useAppSelector((state) => state.todos.todosList);
  const isEmptyList = todos.length === 0;
  return (
    <main className="flex flex-col items-center min-h-screen gap-8 p-24">
      <h1 className="p-6 text-4xl font-bold text-center bg-white rounded-lg shadow-xl dark:bg-gray-200">
        Список задач
      </h1>
      <NewTodo />
      <div className="flex w-full max-w-2xl p-4 bg-white border-2 rounded-lg shadow-inner dark:bg-gray-200">
        {isEmptyList ? (
          <span className="text-xl font-bold text-center justify-self-center">
            Тут еще пока ничего нет!
            <br />
            <br />
            Создайте новую задачу и начните пользоваться приложением на полную
            мощность!
          </span>
        ) : (
          <TodoList />
        )}
      </div>
    </main>
  );
}

