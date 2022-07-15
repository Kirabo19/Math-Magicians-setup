import React from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      output: 0,
    };
    this.obj = {};
  }

  clickHandler = (e) => {
    this.newOutput = e.target.textContent;
    this.obj = calculate(this.obj, this.newOutput);
    this.setState({
      output: this.obj.next || this.obj.operation || this.obj.total || 0,
    });
  };

  render() {
    const { output } = this.state;
    return (
      <div className="calculator">
        <div className="output">{output}</div>
        <div className="numbers">
          <button type="button" onClick={this.clickHandler}>7</button>
          <button type="button" onClick={this.clickHandler}>8</button>
          <button type="button" onClick={this.clickHandler}>9</button>
          <button type="button" onClick={this.clickHandler}>4</button>
          <button type="button" onClick={this.clickHandler}>5</button>
          <button type="button" onClick={this.clickHandler}>6</button>
          <button type="button" onClick={this.clickHandler}>1</button>
          <button type="button" onClick={this.clickHandler}>2</button>
          <button type="button" onClick={this.clickHandler}>3</button>
          <button type="button" className="number0" onClick={this.clickHandler}>0</button>
          <button type="button" onClick={this.clickHandler}>.</button>
        </div>
        <button type="button" className="operation" onClick={this.clickHandler}>&#xf7;</button>
        <button type="button" className="operation" onClick={this.clickHandler}>x</button>
        <button type="button" className="operation" onClick={this.clickHandler}>-</button>
        <button type="button" className="operation" onClick={this.clickHandler}>+</button>
        <button type="button" className="operation" onClick={this.clickHandler}>=</button>
        <button type="button" className="options" onClick={this.clickHandler}>AC</button>
        <button type="button" className="options" onClick={this.clickHandler}>+/-</button>
        <button type="button" className="options" onClick={this.clickHandler}>%</button>
      </div>
    );
  }
}

export default Calculator;
