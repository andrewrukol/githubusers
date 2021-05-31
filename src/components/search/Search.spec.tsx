import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { INPUT_TESTID, Search, SEARCH_BUTTON_TESTID } from './Search';

describe("components/Search", () => {
  const onSearchMock = jest.fn();
  it("should not call the provided callback if query is not entered", () => {
    const query = "Foo";
    const { getByTestId } = render(<Search onSearch={onSearchMock} />);
    fireEvent.click(getByTestId(SEARCH_BUTTON_TESTID));
    expect(onSearchMock).not.toHaveBeenCalledWith(query);
  });

  it("should call the provided callback with correct query", () => {
    const query = "Foo";
    const { getByTestId } = render(<Search onSearch={onSearchMock} />);
    fireEvent.change(getByTestId(INPUT_TESTID), { target: { value: query } });
    fireEvent.click(getByTestId(SEARCH_BUTTON_TESTID));
    expect(onSearchMock).toHaveBeenCalledWith(query);
  });
});
