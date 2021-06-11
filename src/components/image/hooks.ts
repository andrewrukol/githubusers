import React from 'react';

export function useLoadImage() {
  const [ isLoaded, setIsLoaded ] = React.useState<boolean>(false);
  const loadHandler = React.useCallback(
    () => {
      setIsLoaded(true);
    },
    [setIsLoaded],
  );
  return { isLoaded, loadHandler };
}