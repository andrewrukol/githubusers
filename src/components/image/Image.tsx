import React from 'react';

import ImageBootstrap from 'react-bootstrap/Image';

import styles from './Image.module.css';

export interface ImageWrapperProps {
  src: string;
}

export const Image: React.FC<ImageWrapperProps> = ({ src }) => {
  const [ isLoaded, setIsLoaded ] = React.useState<boolean>(false);
  const loadHandler = React.useCallback(
    () => {
      setIsLoaded(true);
    },
    [setIsLoaded],
  );
  return (
    <ImageBootstrap
      className={`${styles.image} ${isLoaded ? styles.visible : ""}`}
      src={src}
      rounded
      onLoad={loadHandler}
    />
  );
};
