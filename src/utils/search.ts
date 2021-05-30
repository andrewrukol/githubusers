import { SEARCH_USERS_URL } from "../consts";
import { SearchResult } from "../types";

function generateSearchUrl(query: string): string {
  return `${SEARCH_USERS_URL}?q=${encodeURIComponent(query)}`;
}

export function performSearch(
  query: string,
  onResult: (result: SearchResult) => void,
  onError: (message: string) => void,
) {
  fetch(generateSearchUrl(query))
    .then(async (response) => {
      const data = await response.json();
      if (response.ok) {
        onResult(data);
      } else {
        throw new Error(data.message);
      }
    })
    .catch((error: Error) => {
      onError(error.message)
    });
}
