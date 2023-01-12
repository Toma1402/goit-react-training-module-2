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
    const { visible } = this.state;
    return (
      <div className="Dropdown">
        <button
          onClick={this.toggle}
          type="button"
          className="Dropdown__toggle"
        >
          {visible ? 'приховти' : 'показати'}
        </button>

        {visible && <div className="Dropdown__menu">Випадаюче меню</div>}
      </div>
    );
  }
}
//change name
