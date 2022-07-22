import React, { useState } from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  let obj = {};
  const [result, setResult] = useState(obj);
  const clickHandler = (e) => {
    const buttonValue = e.target.textContent;
    obj = calculate(result, buttonValue);
    setResult(obj);
  };
  return (
    <div className="calculator">
      <div className="output">{ result.next || result.operation || result.total || 0 }</div>
      <div className="numbers">
        <button type="button" onClick={clickHandler}>7</button>
        <button type="button" onClick={clickHandler}>8</button>
        <button type="button" onClick={clickHandler}>9</button>
        <button type="button" onClick={clickHandler}>4</button>
        <button type="button" onClick={clickHandler}>5</button>
        <button type="button" onClick={clickHandler}>6</button>
        <button type="button" onClick={clickHandler}>1</button>
        <button type="button" onClick={clickHandler}>2</button>
        <button type="button" onClick={clickHandler}>3</button>
        <button type="button" className="number0" onClick={clickHandler}>0</button>
        <button type="button" onClick={clickHandler}>.</button>
      </div>
      <button type="button" className="operation" onClick={clickHandler}>&#xf7;</button>
      <button type="button" className="operation" onClick={clickHandler}>x</button>
      <button type="button" className="operation" onClick={clickHandler}>-</button>
      <button type="button" className="operation" onClick={clickHandler}>+</button>
      <button type="button" className="operation" onClick={clickHandler}>=</button>
      <button type="button" className="options" onClick={clickHandler}>AC</button>
      <button type="button" className="options" onClick={clickHandler}>+/-</button>
      <button type="button" className="options" onClick={clickHandler}>%</button>
    </div>
  );
};
export default Calculator;
