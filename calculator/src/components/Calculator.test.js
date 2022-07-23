import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calculator from './Calculator';

it('test button 2 in calculator', () => {
  render(<Calculator />);
  fireEvent.click(screen.getByText('2'));
  expect(screen.getByTestId('output')).toHaveTextContent('2');
});

it('test button AC in calculator', () => {
  render(<Calculator />);
  fireEvent.click(screen.getByText('AC'));
  expect(screen.getByTestId('output')).toHaveTextContent('0');
});