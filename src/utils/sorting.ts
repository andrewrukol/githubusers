import { Sorting, SortOrder } from "../types";

export function sortTextFieldWithDirection(field: string, sortOrder: SortOrder) {
  return (a: any, b: any) => {
    const direction = sortOrder === "ASC" ? 1 : -1;
    const leftText = a[field].toLowerCase();
    const rightText = b[field].toLowerCase();
    let result = 0;
    if (leftText < rightText) {
        result = -1;
    } else if (leftText > rightText) {
        result = 1;
    }
    return result * direction;
  }
}

export function createNewSorting(currentSorting: Sorting, field: string): Sorting {
  let order: SortOrder = "ASC";
  if (field === currentSorting.field) {
    order = currentSorting.order === "ASC" ? "DESC" : "ASC";
  }
  return {
    field: field,
    order: order, 
  }
}

export function getSortDirection(sorting: Sorting, field: string) {
  return sorting.field === field ? sorting.order : undefined
}
