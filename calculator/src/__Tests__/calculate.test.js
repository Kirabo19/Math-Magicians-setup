import calculate from '../logic/calculate';
test('test AC', () => {
  const obj = {
    total: null,
    next: null,
    operation: null,
  };
  const output = calculate({ total: '5' }, 'AC');
  expect(output).toEqual(obj);
});
test('test dot button', () => {
  const output = calculate({ next: '7' }, '.');
  expect(output).toEqual({ next: '7.' });
});
test('test " + " button', () => {
  const obj = {
    total: '2',
    next: '15',
    operation: '+',
  };
  const output = calculate(obj, '=');
  expect(output).toEqual({ total: '17', next: null, operation: null });
});
test('Test "+/-"  button: positive number', () => {
  const output = calculate({ next: '7' }, '+/-');
  expect(output).toEqual({ next: '-7' });
});
test('Test " +/- " button: negative number', () => {
  const output = calculate({ next: '-7' }, '+/-');
  expect(output).toEqual({ next: '7' });
});
test('test opreration button', () => {
  const obj = {
    total: '2',
    next: null,
    operation: '-',
  };
  const output = calculate(obj, '+');
  expect(output).toEqual({ total: '2', next: null, operation: '+' });
});
test('test add second number of operation ', () => {
  const obj = {
    total: '5',
    next: null,
    operation: '-',
  };
  const output = calculate(obj, '2');
  expect(output).toEqual({ total: '5', next: '2', operation: '-' });
});

test('test add operation and shift "next" into "total" ', () => {
  const obj = {
    total: null,
    next: '4',
    operation: null,
  };
  const output = calculate(obj, 'x');
  expect(output).toEqual({ total: '4', next: null, operation: 'x' });
});