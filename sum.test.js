const sum = require('./sum');
const multiplication = require('./sum');

test('sums two numbers', () => {
  expect(sum(1, 2)).toBe(3);
});

test2('sums two numbers', () => {
  expect(multiplication(1, 2)).toBe(2);
});

