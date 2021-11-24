//컴포넌트의 필수props 지정, props type 지정 시
// propsTypes를 .
import React, { Component } from "react";
import PropTypes from "prop-types";
class MyComponent extends Component {
  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        hello {name}
        <br />
        <span>칠드런{children}</span>
        <span>가장 좋아하는 숫자{favoriteNumber}</span>
      </div>
    );
  }
}

//부모 컴포넌트에서 props값을 안줬을시 기본값 설정
MyComponent.defaultProps = {
  name: "경열",
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
