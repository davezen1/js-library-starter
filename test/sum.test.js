const sum = require("../src/index");

test("adds 1 + 2 to equal 3", () => {
  sum(1, 2)
  expect(sum(1, 2)).toBe(3);
});
