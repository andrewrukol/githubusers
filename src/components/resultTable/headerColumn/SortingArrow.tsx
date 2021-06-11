import React from 'react';
import { ArrowUp } from 'react-bootstrap-icons';
import { ArrowDown } from 'react-bootstrap-icons';
import { SortDirection } from "../../../types";

interface SortingArrowProps {
  sortDirection: SortDirection;
}

export const SortingArrow: React.FC<SortingArrowProps> = ({ sortDirection }) => {
  if (!sortDirection) {
    return null
  }
  if (sortDirection === "ASC") {
    return <ArrowDown />;
  } else {
    return <ArrowUp />;
  }
}