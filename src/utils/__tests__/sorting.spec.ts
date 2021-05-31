import { createNewSorting, getSortDirection, sortTextFieldWithDirection } from "../sorting";

describe("utils/sorting", () => {
  describe("sortTextFieldWithDirection", () => {
    const data = [
      { name: "test1" },
      { name: "test3" },
      { name: "test4" },
      { name: "test2" }
    ];
    it("should sort in ASC order", () => {
      expect(data.sort(sortTextFieldWithDirection("name", "ASC"))).toEqual([
        { name: "test1" },
        { name: "test2" },
        { name: "test3" },
        { name: "test4" }
      ]);
    });
  
    it("should sort in DESC order", () => {
      expect(data.sort(sortTextFieldWithDirection("name", "DESC"))).toEqual([
        { name: "test4" },
        { name: "test3" },
        { name: "test2" },
        { name: "test1" }
      ]);
    });
  });

  describe("createNewSorting", () => {
    it("should switch order direction", () => {
      expect(createNewSorting(
        {
          field: "name",
          order: "ASC",
        },
        "name",
      )).toEqual({
        field: "name",
        order: "DESC",
      })
    });

    it("should apply new field sorting", () => {
      expect(createNewSorting(
        {
          field: "test",
          order: "ASC",
        },
        "name",
      )).toEqual({
        field: "name",
        order: "ASC",
      })
    });
  });

  describe("getSortDirection", () => {
    it("should get sort direction correctly", () => {
      expect(getSortDirection(
        {
          field: "login",
          order: "ASC"
        },
        "login"
      )).toBe("ASC");
    });

    it("should get undefined for non sorted field", () => {
      expect(getSortDirection(
        {
          field: "login",
          order: "ASC"
        },
        "missing field"
      )).toBeUndefined();
    });
  });
});
