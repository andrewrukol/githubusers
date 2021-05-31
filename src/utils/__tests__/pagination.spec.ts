import { getAmountOfPages } from '../pagination';

describe("utils/pagination", () => {
  it("should calculate amount of pages correctly", () => {
    expect(getAmountOfPages(30, 9)).toBe(4);
  });
});
