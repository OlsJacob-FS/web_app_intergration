//TDD
const hideNumber = require("./index");
describe("", () => {
  test("Test to hide all numbers except the last four digits", () => {
    expect(hideNumber("1234567890123456")).toBe("************3456");
  });
});

describe("", () => {
  test("Test if the credit card number is returned as a string", () => {
    expect(hideNumber("123456789012")).toBe("************9012");
  });
});
describe("", () => {
  test("Test if credit card with the length of 9 is a valid credit card number", () => {
    expect(hideNumber("123456789")).toBe("Invalid Credit Card");
  });
});

describe("", () => {
  test("Test if credit card with the length of 17 is a valid credit card number", () => {
    expect(hideNumber("12345678901234567")).toBe("Invalid Credit Card");
  });
});

describe("", () => {
  test("Test if the user is able to enter in credit card as a number and not a string", () => {
    expect(hideNumber(123456789012)).toBe("Invalid Data Type");
  });
});
