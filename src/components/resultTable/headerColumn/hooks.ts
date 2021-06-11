import React from 'react';

export function useColumnClickHandler(onClick: (field: string) => void, field: string) {
  return React.useCallback(
    () => {
      onClick(field);
    },
    [onClick, field],
  );
}