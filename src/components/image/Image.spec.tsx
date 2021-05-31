import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import styles from './Image.module.css';

import { Image, IMAGE_TEST_ID } from "./Image";

describe("components/Image", () => {
  it("should be visible once loaded", () => {
    const { getByTestId } = render(<Image src="#" />);
    const image = getByTestId(IMAGE_TEST_ID);
    fireEvent.load(image);
    expect(image.classList.contains(styles.visible)).toBe(true);
  });

  it("should not be visible initially", () => {
    const { getByTestId } = render(<Image src="#" />);
    const image = getByTestId(IMAGE_TEST_ID);
    expect(image.classList.contains(styles.visible)).toBe(false);
  });
});
