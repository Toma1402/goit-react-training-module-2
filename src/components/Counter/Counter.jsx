import React from 'react';
import { Controls } from './Controls';
export class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
    a: 1,
    b: 2,
  };
  handleIncrement = () => {
    this.setState(prevState => {
      return { value: prevState.value + 1 };
    });
  };
  handleSecrement = () => {
    this.setState(prevState => {
      return { value: prevState.value - 1 };
    });
  };
  render() {
    const { value } = this.state;
    return (
      <div>
        <span>{value}</span>
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleSecrement}
        />
      </div>
    );
  }
}
