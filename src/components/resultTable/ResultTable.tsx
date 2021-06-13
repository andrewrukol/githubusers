import React from 'react';

import Table from 'react-bootstrap/Table';
import type { SearchResultItem } from '../../types';
import { getSortDirection } from '../../utils/sorting';
import { Pagination } from '../pagination/Pagination';
import { HeaderColumn } from './headerColumn/HeaderColumn';
import { getAmountOfPages } from '../../utils/pagination';
import { COLUMNS_CONFIG } from './consts';
import { prepareCurrentPageItems } from './utils';
import { Row } from './row/Row';
import { usePagination, useSorting } from './hooks';

export interface ResultTableProps {
  items: SearchResultItem[];
  itemsPerPage: number;
}

export const ResultTable: React.FC<ResultTableProps> = ({ items, itemsPerPage }) => {
  const { pageNumber, pageChangeHandler } = usePagination<SearchResultItem>(items);
  const { sortedResult, sortHandler, sorting } = useSorting<SearchResultItem>(items);
  const [ currentPageItems, setcurrentPageItems ] = React.useState<SearchResultItem[]>(
    prepareCurrentPageItems(sortedResult, pageNumber, itemsPerPage),
  );

  React.useEffect(
    () => {
      setcurrentPageItems(prepareCurrentPageItems(sortedResult, pageNumber, itemsPerPage));
    },
    [sortedResult, pageNumber, setcurrentPageItems, itemsPerPage],
  );
  
  return (
    <>
      <Table striped bordered>
        <thead>
          <tr>
            {COLUMNS_CONFIG.map(item => <HeaderColumn
              key={item.field}
              field={item.field}
              onClick={sortHandler}
              label={item.label}
              sortDirection={getSortDirection(sorting, item.field)}
            />)}
          </tr>
        </thead>
        <tbody>
          {currentPageItems.map((item, index) =>
            <Row {...item} key={index} />
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
