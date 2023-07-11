import {
  configureStore,
  ThunkAction,
  Action,
  createListenerMiddleware,
} from "@reduxjs/toolkit";
import { todosSlice } from "./todoSlice";
import { themeSlice } from "./themeSlice";

export const store = configureStore({
  reducer: {
    [todosSlice.name]: todosSlice.reducer,
    [themeSlice.name]: themeSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
export type AppState = ReturnType<AppStore["getState"]>;
