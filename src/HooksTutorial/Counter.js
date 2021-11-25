import React, { useState, useEffect } from "react";

const Counter = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  useEffect(() => {
    console.log("랜더링");
    return () => {
      console.log("리턴");
    };
  }, [name]);
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeId = (e) => {
    setId(e.target.value);
  };
  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={id} onChange={onChangeId} />
      </div>
      <div>
        <div>이름:{name}</div>
        <div>닉네임:{id}</div>
      </div>
    </div>
  );
};

export default Counter;
