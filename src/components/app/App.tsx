import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import { Search } from '../search/Search';
import { performSearch } from '../../utils/search';
import type { SearchResult } from '../../types';
import { emptyResult, MIN_SEARCH_QUERY_LENGTH } from '../../consts';
import { ResultTable } from '../resultTable/ResultTable';
import Spinner from 'react-bootstrap/Spinner';

export const App: React.FC = () => {
  const [searchResult, setSearchResult] = React.useState<SearchResult>(emptyResult);
  const [requestError, setRequestError] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const handleSearch = React.useCallback(
    (query: string) => {
      if (!query || query.length < MIN_SEARCH_QUERY_LENGTH) {
        setRequestError("Please enter at least 3 characters");
        return;
      }
      setSearchResult(emptyResult);
      setIsLoading(true);
      setRequestError(null);
      performSearch(
        query,
        (result) => {
          setIsLoading(false);
          setSearchResult(result);
        },
        (message) => {
          setIsLoading(false);
          setRequestError(message);
        },
      );
    },
    [setSearchResult],
  );

  return (
    <Container className={"py-2"}>
      <h1 className="text-center">GitHub Users</h1>
      <Row className={"mt-4"}>
        <Col>
          {requestError && <Alert variant={"danger"}>
            {requestError}
          </Alert>}
          <Search onSearch={handleSearch}/>
        </Col>
      </Row>
      <Row className={"mt-4"}>
        <Col>
          <ResultTable result={searchResult} />
          {isLoading &&
            <div className="d-flex justify-content-center">
              <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            </div>
          }
        </Col>
      </Row>
    </Container>
  );
};
