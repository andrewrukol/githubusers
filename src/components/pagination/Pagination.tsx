import React from 'react';

import PaginationBootstrap from 'react-bootstrap/Pagination';

export interface PaginationProps {
  amountOfPages: number;
  active: number;
  onPageChange: (pageNumber: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  amountOfPages,
  active,
  onPageChange,
}) => {
  const handleClick = React.useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      const clickedPageNumber: number = parseInt(event.currentTarget.dataset.id || "") ?? active;
      onPageChange(clickedPageNumber);
    },
    [onPageChange, active],
  );

  if (amountOfPages < 2) {
    return null;
  }

  const items = [];
  for (let i = 0; i < amountOfPages; i++) {
    items.push(
      <PaginationBootstrap.Item
        key={i}
        active={i === active}
        data-id={i}
        onClick={handleClick}
      >
        {i + 1}
      </PaginationBootstrap.Item>,
    );
  }
  return (
    <PaginationBootstrap className={"justify-content-center"}>
      <PaginationBootstrap.Prev
        disabled={active === 0}
        data-id={active - 1}
        onClick={handleClick}
      ></PaginationBootstrap.Prev>
      {items}
      <PaginationBootstrap.Next
      disabled={active === amountOfPages - 1}
        data-id={active + 1}
        onClick={handleClick}
      ></PaginationBootstrap.Next>
    </PaginationBootstrap>
  );
};
