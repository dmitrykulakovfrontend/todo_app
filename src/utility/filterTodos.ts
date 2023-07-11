import { Filter } from "@/components/TodoList";
import type { Todo } from "@/redux/types";

export default function filterTodos(filter: Filter, todos: Todo[]) {
  switch (filter) {
    case Filter.COMPLETED:
      return todos.filter((todo) => todo.isCompleted);
    case Filter.IN_PROGRESS:
      return todos.filter((todo) => !todo.isCompleted);
    case Filter.ALL:
      return todos;
    default:
      return todos;
  }
}
