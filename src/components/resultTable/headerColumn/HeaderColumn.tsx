import React from 'react';

import type { SortDirection } from '../../../types';
import styles from './HeaderColumn.module.css';
import { useColumnClickHandler } from './hooks';
import { SortingArrow } from './SortingArrow';

export interface HeaderColumnProps {
  field: string;
  label: string;
  sortDirection: SortDirection; 
  onClick: (field: string) => void;
}

export const HeaderColumn: React.FC<HeaderColumnProps> = ({
  onClick,
  field,
  label,
  sortDirection,
}) => {
  const columnClickHandler = useColumnClickHandler(onClick, field);

  return (
    <th
      className={styles.columnHeader}
      onClick={columnClickHandler}
    >
        {label}
        <SortingArrow sortDirection={sortDirection} />
    </th>
  );
}
