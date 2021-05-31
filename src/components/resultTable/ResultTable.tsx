import React from 'react';

import Table from 'react-bootstrap/Table';
import type { SearchResultItem, Sorting } from '../../types';
import { createNewSorting, getSortDirection } from '../../utils/sorting';
import { Pagination } from '../pagination/Pagination';
import { HeaderColumn } from './headerColumn/HeaderColumn';
import { getAmountOfPages } from '../../utils/pagination';
import { COLUMNS_CONFIG, INITIAL_SORTING } from './consts';
import { prepareCurrentPageItems, sortResult } from './utils';
import { Image } from "../image/Image";

import styles from './ResultTable.module.css';

export interface ResultTableProps {
  items: SearchResultItem[];
  itemsPerPage: number;
}

export const ResultTable: React.FC<ResultTableProps> = ({ items, itemsPerPage }) => {
  const [ pageNumber, setPageNumber ] = React.useState<number>(0);
  const [ sorting, setSorting ] = React.useState<Sorting>(INITIAL_SORTING);
  const [ sortedResult, setSortedResult ] = React.useState<SearchResultItem[]>(
    sortResult(items, sorting),
  );
  const [ currentPageItems, setcurrentPageItems ] = React.useState<SearchResultItem[]>(
    prepareCurrentPageItems(sortedResult, pageNumber, itemsPerPage),
  );
  const pageChangeHandler = React.useCallback(
    (newPageNumber: number) => {
      setPageNumber(newPageNumber);
    },
    [setPageNumber],
  );

  const columnClickHandler = React.useCallback(
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

  React.useEffect(
    () => {
      setcurrentPageItems(prepareCurrentPageItems(sortedResult, pageNumber, itemsPerPage));
    },
    [sortedResult, pageNumber, setcurrentPageItems, itemsPerPage],
  );

  React.useEffect(
    () => {
      setPageNumber(0);
    },
    [items, setPageNumber],
  )
  
  return (
    <>
      <Table striped bordered>
        <thead>
          <tr>
            {COLUMNS_CONFIG.map(item => <HeaderColumn
              key={item.field}
              field={item.field}
              onClick={columnClickHandler}
              label={item.label}
              sortDirection={getSortDirection(sorting, item.field)}
            />)}
          </tr>
        </thead>
        <tbody>
          {currentPageItems.map((item, index) =>
            <tr key={index}>
              <td>
                <div className={styles.imageContainer}>
                  <Image key={item.avatar_url} src={item.avatar_url} />
                </div>
              </td>
              <td>{item.login}</td>
              <td>{item.type}</td>
            </tr>
          )}
        </tbody>
      </Table>
      <Pagination
        amountOfPages={getAmountOfPages(items.length, itemsPerPage)}
        active={pageNumber}
        onPageChange={pageChangeHandler}
      />
    </>
  );
};
