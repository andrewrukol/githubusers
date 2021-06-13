import { fireEvent, render } from '@testing-library/react';
import { HeaderColumn, HeaderColumnProps } from '../HeaderColumn';

describe("components/resultTable/headerColumn/HeaderColumn", () => {
  const onClickMock = jest.fn();
  const props: HeaderColumnProps = {
    field: "test_field",
    label: "test_label",
    sortDirection: "ASC",
    onClick: onClickMock,
  }

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should", () => {
    const { container } = render(<HeaderColumn {...props} />);
    fireEvent.click(container.querySelector("th")!);
    expect(onClickMock).toBeCalled();
  });
});
