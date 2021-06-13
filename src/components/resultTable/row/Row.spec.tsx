import { render } from '@testing-library/react';
import { Row, RowProps } from './Row';

describe("components/resultTable/row/Row", () => {
  const props: RowProps = {
    avatar_url: "test.png",
    login: "test_login",
    type: "test_type",
  }

  it("should render user login", () => {
    const { queryByText } = render(<Row {...props} />);
    expect(queryByText("test_login")).not.toBeNull();
  });
});
