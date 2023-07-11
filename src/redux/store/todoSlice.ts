import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../types";
import { v4 as uuid } from "uuid";
// Type for our state
export type TodosState = {
  todosList: Todo[];
};

// Initial state
const initialState: TodosState = {
  todosList: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    resetTodos: () => initialState,
    createTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: uuid(),
        name: action.payload,
        isCompleted: false,
      };
      state.todosList.push(newTodo);
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todosList = state.todosList.filter(
        (todo) => todo.id !== action.payload
      );
    },
    changeTodoStatus: (state, action: PayloadAction<string>) => {
      state.todosList = state.todosList.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      });
    },
  },
});

export const { changeTodoStatus, createTodo, removeTodo, resetTodos } =
  todosSlice.actions;
export default todosSlice.reducer;
