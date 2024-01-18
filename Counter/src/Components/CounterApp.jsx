import React, { Component } from 'react';

export default class CounterApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }

  handleAdd = () => {
    this.setState({ number: this.state.number + 1 });
  }

  handleMinus = () => {
    this.setState({ number: this.state.number - 1 });
  }

  handleReset = () => {
    this.setState({ number: 0 });
  }

  render() {
    return (
      <>
        <h1>Counter App</h1>
        <div id='score'>
        <h1>{this.state.number}</h1>
        </div>
        <div id='buttons'>
        <button onClick={this.handleAdd}>+</button>
        <button onClick={this.handleMinus}>-</button>
        <button onClick={this.handleReset}>Reset</button>
        </div>
      </>
    );
  }
}
