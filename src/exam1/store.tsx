import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import todoReducer from "./todoSlice";

export const store = configureStore({
  reducer: {
    myCounter: counterReducer,
    todos: todoReducer,
  },
});
