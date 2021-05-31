import type { Sorting } from "../../../types";
import { prepareCurrentPageItems, sortResult } from "../utils";

describe("components/resultTable", () => {
  const items = [
    { avatar_url: "#", login: "CCC", type: "user" },
    { avatar_url: "test.com", login: "aaa", type: "user" },
    { avatar_url: "test2.com", login: "bbb", type: "user" },
  ];

  describe("sortResult", () => {
    const sorting: Sorting = {
      field: "login",
      order: "ASC",
    }
    it("should sort items correctly", () => {
      expect(sortResult(items, sorting)).toEqual([
        { avatar_url: "test.com", login: "aaa", type: "user" },
        { avatar_url: "test2.com", login: "bbb", type: "user" },
        { avatar_url: "#", login: "CCC", type: "user" },
      ])
    });
  });

  describe("prepareCurrentPageItems", () => {
    it("should show correct content of the first page", () => {
      expect(prepareCurrentPageItems(items, 0, 2)).toEqual([
        { avatar_url: "#", login: "CCC", type: "user" },
        { avatar_url: "test.com", login: "aaa", type: "user" },
      ])
    });
    it("should show correct content of the second page", () => {
      expect(prepareCurrentPageItems(items, 1, 2)).toEqual([
        { avatar_url: "test2.com", login: "bbb", type: "user" },
      ])
    });
  });
});
