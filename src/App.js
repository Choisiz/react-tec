/* eslint-disable */
import React, { useState } from "react";
import "./App.css";
function App() {
  const [title, setTitle] = useState(["코트추천", "옷추천", "바지추천"]);
  const [good, setGood] = useState(0);
  let today = "크리스마스";
  return (
    <div className="App">
      <div className="black-nav" black-nav>
        <div>개발 블로그</div>
      </div>
      <div className="list">
        <h1
          onClick={() => {
            let array = [...title];
            array[0] = "여자코트";
            setTitle(array);
          }}
        >
          {title[0]}
          <span
            onClick={() => {
              setGood(good + 1);
            }}
          >
            👍{good}
          </span>
        </h1>
        <p>12월 25일</p>
        <hr />
        <h1>{title[1]}</h1>
        <p>12월 25일</p>
        <hr />
        <h1>{title[2]}</h1>
        <p>12월 25일</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
