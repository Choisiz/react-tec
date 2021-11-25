import React, { Component } from "react";

class LifeCycle extends Component {
  state = {
    number: 0,
    color: null,
  };
  myRef = null;

  constructor(props) {
    super(props);
    console.log("constructor", props);
  }

  //props에 받아온 값을 state에 동기화(마운트,업데이트)
  static getDerivedStateFormProps(nextProps, prevState) {
    console.log("getDerivedStateFormProps");
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }
  //첫 렌더링 마친후
  componentDidMount() {
    console.log("componentDidMount");
  }
  //변경시 리 렌더링 시작여부
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextProps, nextState);
    return nextState.number % 10 !== 4;
  }
  //컴포넌트 dom제거
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };
  //브라우저 반영 직전
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate", prevProps, prevState);
    if (prevProps.color !== this.props.color) {
      console.log("??");
      return this.myRef.style.color;
    }
    return null;
  }
  //리렌더링 마친후
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate", prevProps, prevState, snapshot);
    if (snapshot) {
      console.log("업데이트 직전 색상:", snapshot);
    }
  }
  render() {
    console.log("render");
    const style = {
      color: this.props.color,
    };
    return (
      <div>
        {this.props.qwer.value}
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          숫자: {this.state.number}
        </h1>
        <p> 색상: {this.state.color}</p>
        <button onClick={this.handleClick}>+</button>
      </div>
    );
  }
}

export default LifeCycle;
