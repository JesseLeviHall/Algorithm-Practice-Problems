//mock function api for testing with jest.
//refer to docs for common matchers.
//there is a big difference between toBe and toEqual, which is passby reference vs passby value.

const { sum, subtract } = require("../math");

test("sum adds numbers", () => {
  const result = sum(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});

test("subtract subtracts numbers", () => {
  const result = subtract(7, 3);
  const expected = 4;
  expect(result).toBe(expected);
});
