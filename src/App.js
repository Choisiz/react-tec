import React, { useState } from "react";
import Counter from "./HooksTutorial/Counter";

const App = () => {
  const [vsisit, setVisit] = useState(false);
  const btnOnClick = () => {
    setVisit(!vsisit);
  };
  return (
    <div>
      <button onClick={btnOnClick}>{vsisit ? "숨기기" : "보이기"}</button>
      <hr />
      {vsisit && <Counter />}
    </div>
  );
};

export default App;
