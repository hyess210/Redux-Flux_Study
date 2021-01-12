// 똑똑한 컴포넌트
import React, { Component } from "react";

import Value from "./Value";
import Control from "./Control";
import { connect } from "react-redux"; // Root Component 밑의 Component들이 Store에 연결되기 쉽게 만들어준다.

import * as actions from "../actions";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.setRandomColor = this.setRandomColor.bind(this);
  }

  setRandomColor() {
    const color = [
      Math.floor(Math.random() * 55 + 200),
      Math.floor(Math.random() * 55 + 200),
      Math.floor(Math.random() * 55 + 200),
    ];

    this.props.handleSetColor(color);
  }

  render() {
    const color = this.props.color;
    const style = {
      background: `rgb(${color[0]}, ${color[1]}, ${color[2]})`,
    };

    return (
      <div style={style}>
        <Value number={this.props.number} />
        <Control
          onPlus={this.props.handleIncrement}
          onSubtract={this.props.handleDecrement}
          onRandomizeColor={this.setRandomColor}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    number: state.counter.number,
    color: state.ui.color,
  };
};

const mapDispatchProps = (dispatch) => {
    return {
        handleIncrement : () => { dispatch(actions.increment())},
        handleDecrement : () => { dispatch(actions.decrement())},
        handleSetColor : (color) => { dispatch(actions.setColor(color))}
    };
};

// 상위 컴포넌트인 <Counter />에 connect을 해주면 
// 하위 컴포넌트들인 <Control />, <Value /> 에서 지정된 mapStateToProps, mapDispatchProps을 props로 접근할 수 있다.
export default connect(mapDispatchProps, mapStateToProps)(Counter);
