import React, { useState } from "react";

const Modal = ({ title, target }) => {
  return (
    <div className="modal">
      <h2>{title[target]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
};

export default Modal;
