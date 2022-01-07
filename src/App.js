/* eslint-disable */
import React, { useState } from "react";
import "./App.css";
import Modal from "./Modal";
function App() {
  const [title, setTitle] = useState(["코트추천", "옷추천", "바지추천"]);
  const [good, setGood] = useState(0);
  const [target, setTarget] = useState(0);
  let [modal, setModal] = useState(false);
  let [inputValue, setInputValue] = useState("");
  let today = "크리스마스";

  const titleState = () => {
    let array = [...title];
    array[0] = "여자코트";
    setTitle(array);
  };

  const goodState = () => {
    setGood(good + 1);
  };

  const targetState = (i) => {
    setTarget(i);
  };

  const inputState = (e) => {
    setInputValue(e.target.value);
  };

  const inputStore = () => {
    let arrayCopy = [...title];
    arrayCopy.unshift(inputValue);
    setTitle(arrayCopy);
  };

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 블로그</div>
      </div>
      //map같은경우 key를 강요
      {title.map((value, i) => (
        <div className="list" key={i}>
          <h1 onClick={() => targetState(i)}>
            {value}
            <span onClick={goodState}>🧡{good}</span>
          </h1>
          <p>12월 25일</p>
          <hr />
        </div>
      ))}
      <div className="publish">
        <input onChange={inputState} />
        <button onClick={inputStore}>저장</button>
      </div>
      <button onClick={() => setModal(!modal)}>온오프</button>
      {modal === true ? <Modal title={title} target={target} /> : null}
    </div>
  );
}

export default App;
