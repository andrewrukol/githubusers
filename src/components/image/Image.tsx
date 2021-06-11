import React from 'react';

import ImageBootstrap from 'react-bootstrap/Image';
import { useLoadImage } from './hooks';

import styles from './Image.module.css';

export interface ImageWrapperProps {
  src: string;
}

export const IMAGE_TEST_ID = "image-test-id";

export const Image: React.FC<ImageWrapperProps> = ({ src }) => {
  const { isLoaded, loadHandler } = useLoadImage();
  return (
    <ImageBootstrap
      className={`${styles.image} ${isLoaded ? styles.visible : ""}`}
      src={src}
      rounded
      data-testid={IMAGE_TEST_ID}
      onLoad={loadHandler}
    />
  );
};
