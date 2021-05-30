import React from 'react';

import { ArrowUp } from 'react-bootstrap-icons';
import { ArrowDown } from 'react-bootstrap-icons';

import styles from './HeaderColumn.module.css';

export interface HeaderColumnProps {
  field: string;
  label: string;
  sortDirection: "ASC" | "DESC" | undefined; 
  onClick: (field: string) => void;
}

export const HeaderColumn: React.FC<HeaderColumnProps> = ({
  onClick,
  field,
  label,
  sortDirection,
}) => {
  const columnClickHandler = React.useCallback(
    () => {
      onClick(field);
    },
    [onClick, field],
  );

  let sortingArrow = null;
  if (sortDirection) {
    if (sortDirection === "ASC") {
      sortingArrow = <ArrowDown />;
    } else {
      sortingArrow = <ArrowUp />;
    }
  }

  return (
    <th
      className={styles.columnHeader}
      onClick={columnClickHandler}
    >
        {label}
        {sortingArrow}
    </th>
  );
}
