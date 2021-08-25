import { setTextToXChars } from "../functions/functions";
import "@testing-library/jest-dom";
import { mockData } from "../__mocks__/mock-data";

describe("setTextToXChars function", () => {
  it("Should return a string limited to 30 characters with ...", () => {
    const result = setTextToXChars(mockData.articles[0].title, 30);
    expect(result).toBe("Extinction Rebellion London pr...");
  });

  it("Should return the full string if length = 0", () => {
    const result = setTextToXChars(mockData.articles[0].title, 0);
    expect(result).toBe(
      "Extinction Rebellion London protests – live: Activists block roads around Parliament on second day of action - The Independent"
    );
  });

  it("Should return the full string if length < 0", () => {
    const result = setTextToXChars(mockData.articles[0].title, -2);
    expect(result).toBe(
      "Extinction Rebellion London protests – live: Activists block roads around Parliament on second day of action - The Independent"
    );
  });

  it("Should return an empty string if string is null", () => {
    const result = setTextToXChars(null, 10);
    expect(result).toBe("");
  });

  it("Should return an empty string if string is empty", () => {
    const result = setTextToXChars("", 10);
    expect(result).toBe("");
  });

  it("Should return the string if length is > the length of the string", () => {
    const result = setTextToXChars(mockData.articles[0].title, 500);
    expect(result).toBe(
      "Extinction Rebellion London protests – live: Activists block roads around Parliament on second day of action - The Independent"
    );
  });
});
