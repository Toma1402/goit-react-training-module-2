import React, { Component } from 'react';
import './Dropdown.css';
export class Dropdown extends Component {
  state = {
    visible: false,
  };
  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    return (
      <div className="Dropdown">
        <button
          onClick={this.toggle}
          type="button"
          className="Dropdown__toggle"
        >
          {this.state.visible ? 'приховти' : 'показати'}
        </button>

        {this.state.visible && (
          <div className="Dropdown__menu">Випадаюче меню</div>
        )}
      </div>
    );
  }
}
//change name
