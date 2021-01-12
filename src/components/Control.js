import React, { Component, PropTypes } from "react";

const propTypes = {
  onPlus: PropTypes.func,
  onSubtract: PropTypes.func,
  onRandomizeColor: PropTypes.func,
};

const createWraning = (funcName) => {
  return () => console.warn(funcName + "is not defined");
};

const defaultProps = {
  onPlus: createWraning("onPlus"),
  onSubtract: createWraning("onSubtract"),
  onRandomizeColor: createWraning("randimizeColor"),
};

export default class Control extends Component {
//   constructor(props) {
//     super(props);
//   }

  render() {
    return (
      <div>
        <button onClick={this.props.onPlus}>+</button>
        <button onClick={this.props.onSubtract}>-</button>
        <button onClick={this.props.onRandomizeColor}>Randomize Color</button>
      </div>
    );
  }
}

Control.propTypes = propTypes;
Control.defaultProps = defaultProps;
