import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Search as SearchIcon } from 'react-bootstrap-icons';

export interface SearchProps {
  onSearch: (query: string) => void;
}

export const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = React.useState<string>("");

  const handleSubmit = React.useCallback(
    (event: React.FormEvent) => {
      onSearch(searchQuery);
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
    <Form onSubmit={handleSubmit}>
      <InputGroup>
        <Form.Control
          type="text"
          placeholder="Search"
          value={searchQuery}
          maxLength={30}
          onChange={handleChange}
        />
        <InputGroup.Append>
          <Button variant="light" type="submit" className="btn-outline-secondary">
            <SearchIcon />
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  );
};
