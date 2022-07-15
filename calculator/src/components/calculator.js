import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator">
        <div className="output">0</div>
        <div className="numbers">
          <button type="button">7</button>
          <button type="button">8</button>
          <button type="button">9</button>
          <button type="button">4</button>
          <button type="button">5</button>
          <button type="button">6</button>
          <button type="button">1</button>
          <button type="button">2</button>
          <button type="button">3</button>
          <button type="button" className="number0">0</button>
          <button type="button">.</button>
        </div>
        <button type="button" className="operation">&#xf7;</button>
        <button type="button" className="operation">x</button>
        <button type="button" className="operation">-</button>
        <button type="button" className="operation">+</button>
        <button type="button" className="operation">=</button>
        <button type="button" className="options">AC</button>
        <button type="button" className="options">+/-</button>
        <button type="button" className="options">%</button>
      </div>
    );
  }
}

export default Calculator;
