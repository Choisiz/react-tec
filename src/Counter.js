import React, { Component } from "react";

class Counter extends Component {
  state = {
    number: 0,
    fixNumber: 327,
  };
  render() {
    const { number, fixNumber } = this.state; //초기세팅 현재
    const btnClick = () => {
      this.setState({ number: number + 1 }, () => alert("ddd"));
    };
    return (
      <div>
        <h1>변하는 값{number}</h1>
        <h1>고정된 값{fixNumber}</h1>
        <button onClick={btnClick}>+</button>
      </div>
    );
  }
}

export default Counter;
