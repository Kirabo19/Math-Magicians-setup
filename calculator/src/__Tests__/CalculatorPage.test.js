import React from 'react';
import renderer from 'react-test-renderer';
import CalculatorPage from '../pages/CalculatorPage';

it('test calculator', () => {
  const calculator = renderer
    .create(<CalculatorPage />)
    .toJSON();
  expect(calculator).toMatchSnapshot();
});