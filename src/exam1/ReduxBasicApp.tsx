import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./counterSlice";

export default function ReduxBasicApp() {
  const count = useSelector((nowState) => nowState.myCounter.myValue);
  const dispatch = useDispatch();
  return (
    <>
      <h2>redux사용법 </h2>
      <h3>현재값 {count}</h3>
      <button onClick={() => dispatch(increment())}>증가</button>
      <button onClick={() => dispatch(decrement())}>감소</button>
      <button onClick={() => dispatch(reset())}>리셋</button>
    </>
  );
}
