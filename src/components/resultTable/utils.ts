import type { SearchResult, SearchResultItem, Sorting } from "../../types";
import { sortTextFieldWithDirection } from "../../utils/sorting";
import { ITEMS_PER_PAGE } from "./consts";

export function sortResult(result: SearchResult, sorting: Sorting) {
  const sortedResult = [...result.items];
  sortedResult.sort(sortTextFieldWithDirection(sorting.field, sorting.order));
  return sortedResult;
}

export function prepareCurrentPageItems(items: SearchResultItem[], pageNumber: number): SearchResultItem[] {
  return items.slice(ITEMS_PER_PAGE * pageNumber, ITEMS_PER_PAGE * (pageNumber + 1));
}
