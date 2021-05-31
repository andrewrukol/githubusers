import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Pagination } from './Pagination';

describe("components/Pagination", () => {
  const onPageChangeMock = jest.fn();
  it("should have all the pages rendered", () => {
    const { getByText } = render(<Pagination
      amountOfPages={4}
      active={2}
      onPageChange={onPageChangeMock}
      />);
    expect(getByText("1")).toBeDefined();
    expect(getByText("2")).toBeDefined();
    expect(getByText("3")).toBeDefined();
    expect(getByText("4")).toBeDefined();
  });

  it("should not render the element if there is only one page", () => {
    const { container } = render(<Pagination
      amountOfPages={1}
      active={1}
      onPageChange={onPageChangeMock}
      />);
    expect(container.firstChild).toBeNull();
  });

  it("should trigger callback on click", () => {
    const { getByText } = render(<Pagination
      amountOfPages={4}
      active={2}
      onPageChange={onPageChangeMock}
      />);
    fireEvent.click(getByText("1"));
    expect(onPageChangeMock).toHaveBeenCalledWith(0);
  });
});