import React, { useState, useEffect, useReducer } from "react";

function reducer(state, action) {
  console.log("ac", action);
  return {
    ...state,
    [action.name]: action.value,
  };
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { name: "", id: "" });
  const { name, id } = state;

  const onChange = (e) => {
    dispatch(e.target);
    console.log("tar", e.target);
  };

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
