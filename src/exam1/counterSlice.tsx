import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "mycounter",
  initialState: { myValue: 0 },
  reducers: {
    //상태변경을 위한 리듀서 함수 정의(증가,감소,리셋)
    increment: (state) => {
      state.myValue += 1;
    },
    decrement: (state) => {
      state.myValue -= 1;
    },
    reset: (state) => {
      state.myValue = 0;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
