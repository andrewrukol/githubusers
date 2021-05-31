import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Search } from '../search/Search';
import { performSearch } from '../../utils/search';
import type { SearchResult } from '../../types';
import { emptyResult } from '../../consts';
import { ResultTable } from '../resultTable/ResultTable';
import { Alert } from '../alert/Alert';
import { ITEMS_PER_PAGE } from '../resultTable/consts';
import { LoadingIndicator } from '../loadingIndicator/LoadingIndicator';

export const App: React.FC = () => {
  const [searchResult, setSearchResult] = React.useState<SearchResult>(emptyResult);
  const [requestError, setRequestError] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const handleSearch = React.useCallback(
    (query: string) => {
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
          {requestError && <Alert errorMessage={requestError} />}
          <Search onSearch={handleSearch}/>
        </Col>
      </Row>
      <Row className={"mt-4"}>
        <Col>
          <ResultTable items={searchResult.items} itemsPerPage={ITEMS_PER_PAGE} />
          {isLoading && <LoadingIndicator />}
        </Col>
      </Row>
    </Container>
  );
};
