import { createSlice } from "@reduxjs/toolkit";

let nextIdx = 2;

const todoSlice = createSlice({
  name: "myTodo",
  initialState: [{ idx: 1, content: "study", done: false }],
  reducers: {
    addTodo: (prev, action) => {
      //할일추가
      prev.push({ idx: nextIdx++, content: action.payload, done: false });
    },
    toggleTodo: (prev, action) => {
      //할일토글
      const todoRow = prev.find((t) => t.idx === action.payload);
      if (todoRow) todoRow.done = !todoRow.done;
    },
    deleteTodo: (prev, action) => {
      return prev.filter((t) => t.idx !== action.payload);
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
