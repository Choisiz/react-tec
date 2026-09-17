import useCounterStore from "./useCounterStore";

export default function ZustandBasicApp() {
  const { count, increment, decrement, reset } = useCounterStore();
  return (
    <>
      <h2>주스탠드 사용법</h2>
      <h3>현재값 {count}</h3>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>0</button>
    </>
  );
}
