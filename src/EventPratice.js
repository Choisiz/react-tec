import React, { Component, useState } from "react";

const EventPratice = () => {
  const [form, setForm] = useState({ userName: "", message: "" });
  const { userName, message } = form;

  const msgChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  const btnClick = (e) => {
    alert(userName + message);
    setForm({ userName: "", message: "" });
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      btnClick();
    }
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="userName"
        value={userName}
        placeholder="사용자명"
        onChange={msgChange}
      />
      <input
        type="text"
        name="message"
        value={message}
        placeholder="메시지입력"
        onChange={msgChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={btnClick}>button</button>
    </div>
  );
};

export default EventPratice;
