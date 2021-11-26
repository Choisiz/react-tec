import React, { useState, useEffect, useReducer } from "react";
import useInput from "./useInput";

const Counter = () => {
  const [state, onChange] = useInput({
    name: "",
    id: "",
  });
  const { name, id } = state;

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="id" value={id} onChange={onChange} />
      </div>
      <div>
        <div>이름:{name}</div>
        <div>닉네임:{id}</div>
      </div>
    </div>
  );
};

export default Counter;
