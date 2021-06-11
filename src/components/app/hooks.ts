import React from 'react';
import { emptyResult } from '../../consts';
import { SearchResult } from '../../types';
import { performSearch } from '../../utils/search';

export function useFetchSearchResult(query: string) {
  const [searchResult, setSearchResult] = React.useState<SearchResult>(emptyResult);
  const [requestError, setRequestError] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(
    () => {
      if (!query) {
        return;
      }
      setSearchResult(emptyResult);
      setIsLoading(true);
      setRequestError(null);
      performSearch(
        query,
        (result) => {
          setIsLoading(false);
          setSearchResult(result);
        },
        (message) => {
          setIsLoading(false);
          setRequestError(message);
        },
      );
    },
    [
      setSearchResult,
      setIsLoading,
      setRequestError,
      query,
    ],
  );
  return {
    searchResult,
    requestError,
    isLoading,
  };
}
