import React, { Component } from "react";

class ErrorCatch extends Component {
  state = {
    error: true,
  };
  componentDidCatch(error, info) {
    this.setState({
      error: true,
    });
    console.log(error, info);
  }
  render() {
    if (this.state.error) return <div>에러가 발생</div>;
    return this.props.children;
  }
}

export default ErrorCatch;
