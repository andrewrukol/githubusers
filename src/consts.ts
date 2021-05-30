import { SearchResult } from "./types";

export const SEARCH_USERS_URL = "https://api.github.com/search/users";

export const emptyResult: SearchResult = {
  incomplete_results: false,
  items: [],
  total_count: 0,
}

export const MIN_SEARCH_QUERY_LENGTH = 3;
