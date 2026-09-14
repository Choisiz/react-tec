import { useReducer, useState } from "react";

const bankReducer = (bankState, bankAction) => {
  console.log("리듀서호출", bankState, bankAction);
  switch (bankAction.mode) {
    case "disposit":
      return bankState + bankAction.amount;
    case "withdraw":
      return bankState - bankAction.amount;
    default:
      return bankState;
  }
};

export default function UseReducerExam() {
  const [inputMoney, setInputMoney] = useState(0);
  const [balance, bankDispatch] = useReducer(bankReducer, 0);

  return (
    <>
      <h2>useReducer 사용하기</h2>
      <p>잔고: {balance}원</p>
      <input
        type="number"
        value={inputMoney}
        step={1000}
        onChange={(e) => {
          setInputMoney(parseInt(e.target.value));
        }}
      />
      <button
        type="button"
        onClick={() => {
          bankDispatch({ mode: "disposit", amount: inputMoney });
        }}
      >
        입금
      </button>
      <button
        type="button"
        onClick={() => {
          bankDispatch({ mode: "withdraw", amount: inputMoney });
        }}
      >
        출금
      </button>
    </>
  );
}
