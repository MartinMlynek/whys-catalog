import { isEmpty } from "../is-empty";

describe("isEmpty", () => {
  it("returns true for undefined", () => {
    expect(isEmpty(undefined)).toBe(true);
  });

  it("returns true for null", () => {
    expect(isEmpty(null)).toBe(true);
  });

  it("returns true for empty array", () => {
    expect(isEmpty([])).toBe(true);
  });

  it("returns false for non-empty array", () => {
    expect(isEmpty([1, 2, 3])).toBe(false);
  });

  it("returns true for empty string", () => {
    expect(isEmpty("")).toBe(true);
  });

  it("returns false for non empty string", () => {
    expect(isEmpty("Test")).toBe(false);
  });

  it("returns false for non empty object", () => {
    expect(isEmpty({ a: 1 })).toBe(false);
  });
});
