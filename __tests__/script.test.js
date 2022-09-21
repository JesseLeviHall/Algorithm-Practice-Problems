const { sum, getLargest } = require("./script.js");

describe("#sum", () => {
  test("it adds numbers correctly", () => {
    const a = 1;
    const b = 2;
    expect(sum(a, b)).toBe(3);
  });
});

describe("#getLargest", () => {
  test("it returns the largest number in the array", () => {
    const array = [1, 2, 3, 4, 5];
    expect(getLargest(array)).toBe(5);
  });
  describe("when the array is empty", () => {
    test("it returns null", () => {
      expect(getLargest([])).toBeNull();
    });
  });
});

test("equal vs tobe", () => {
  const obj = { a: 1, b: 2 };
  expect(obj).toEqual({ a: 1, b: 2 });
  // expect(obj).toBe({ a: 1, b: 2 }) will not work because it is pass by reference
  // expect(obj).toBe(obj) will work because it is pass by reference.
});
