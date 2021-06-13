import { render } from '@testing-library/react';
import { ResultTable } from '../ResultTable';
import { PAGINATION_TEST_ID } from '../../pagination/Pagination';

describe("components/ResultTable", () => {
  const items = [
    { avatar_url: "#", login: "Zzz", type: "user" },
    { avatar_url: "test.jpg", login: "aaa", type: "user" },
    { avatar_url: "test2.png", login: "bbb", type: "user" },
    { avatar_url: "john.png", login: "John", type: "user" },
  ];

  it("should render all the required rows", () => {
    const { container } = render(<ResultTable items={items} itemsPerPage={items.length} />);
    expect(container.querySelectorAll("tr")).toHaveLength(items.length + 1);
  });

  it("should not render pagination if there is not enough pages to show", () => {
    const { queryByTestId } = render(<ResultTable items={items} itemsPerPage={items.length} />);
    expect(queryByTestId(PAGINATION_TEST_ID)).toBeNull();
  });

  it("should render pagination", () => {
    const { container, queryByTestId } = render(<ResultTable items={items}  itemsPerPage={items.length - 1} />);
    expect(container.querySelectorAll("tr")).toHaveLength(items.length);
    expect(queryByTestId(PAGINATION_TEST_ID)).not.toBeNull();
  });
});
