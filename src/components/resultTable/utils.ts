import type { SearchResultItem, Sorting } from "../../types";
import { sortTextFieldWithDirection } from "../../utils/sorting";

export function sortResult(items: SearchResultItem[], sorting: Sorting) {
  const sortedResult = [...items];
  sortedResult.sort(sortTextFieldWithDirection(sorting.field, sorting.order));
  return sortedResult;
}

export function prepareCurrentPageItems(items: SearchResultItem[], pageNumber: number, itemsPerPage: number): SearchResultItem[] {
  return items.slice(itemsPerPage * pageNumber, itemsPerPage * (pageNumber + 1));
}
