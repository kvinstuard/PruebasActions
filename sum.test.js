const sum = require('./sum');
const mult = require('./sum');

test('sums two numbers', () => {
  expect(sum(1, 2)).toBe(3);
});

test('multiplication of two numbers', () => {
  expect(mult(1, 2)).toBe(2);
});