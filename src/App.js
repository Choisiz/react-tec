import React, { Component } from "react";
import ErrorCatch from "./ErrorCatch";
import LifeCycle from "./LifeCycle";

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
class App extends Component {
  state = {
    color: "#00000",
  };
  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
    console.log(this.state.color);
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤색상 만들기</button>
        <ErrorCatch>
          <LifeCycle color={this.state.color} />
        </ErrorCatch>
      </div>
    );
  }
}

export default App;
