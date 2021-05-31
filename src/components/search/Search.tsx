import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Search as SearchIcon } from 'react-bootstrap-icons';
import { MIN_SEARCH_QUERY_LENGTH } from '../../consts';
import { Alert } from '../alert/Alert';

export interface SearchProps {
  onSearch: (query: string) => void;
}

export const INPUT_TESTID = "search-input-test-id";
export const SEARCH_BUTTON_TESTID = "search-button-test-id";

export const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [validationError, setValidationError] = React.useState<string | null>(null);

  const handleSubmit = React.useCallback(
    (event: React.FormEvent) => {
      if (searchQuery && searchQuery.length >= MIN_SEARCH_QUERY_LENGTH) {
        setValidationError(null);
        onSearch(searchQuery);
      } else {
        setValidationError("Please enter at least 3 characters");
      }
      event.preventDefault();
    },
    [searchQuery, onSearch],
  );

  const handleChange = React.useCallback(
    (event) => {
      setSearchQuery(event.target.value);
    },
    [setSearchQuery],
  )
  return (
    <>
      {validationError && <Alert errorMessage={validationError} />}
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Form.Control
            type="text"
            placeholder="Login"
            name="searchQuery"
            data-testid={INPUT_TESTID}
            value={searchQuery}
            maxLength={30}
            onChange={handleChange}
          />
          <InputGroup.Append>
            <Button
              variant="light"
              type="submit"
              className="btn-outline-secondary"
              data-testid={SEARCH_BUTTON_TESTID}
            >
              <SearchIcon />
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
    </>
  );
};
