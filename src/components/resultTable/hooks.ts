import React from 'react';
import { Sorting } from '../../types';
import { createNewSorting } from '../../utils/sorting';
import { INITIAL_SORTING } from './consts';
import { sortResult } from './utils';

export function usePagination<T>(items: T[]) {
  const [ pageNumber, setPageNumber ] = React.useState<number>(0);

  const pageChangeHandler = React.useCallback(
    (newPageNumber: number) => {
      setPageNumber(newPageNumber);
    },
    [setPageNumber],
  );

  React.useEffect(
    () => {
      setPageNumber(0);
    },
    [items, setPageNumber],
  )

  return { pageNumber, pageChangeHandler };
}

export function useSorting<T>(items: T[]) {
  const [ sorting, setSorting ] = React.useState<Sorting>(INITIAL_SORTING);
  const [ sortedResult, setSortedResult ] = React.useState<T[]>(
    sortResult<T>(items, sorting),
  );

  const sortHandler = React.useCallback(
    (field: string) => {
      setSorting(createNewSorting(sorting, field));
    },
    [sorting],
  );

  React.useEffect(
    () => {
      setSortedResult(sortResult(items, sorting));
    },
    [items, sorting, setSortedResult],
  );

  return { sortedResult, sortHandler, sorting };
}
