import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Search } from '../search/Search';
import { ResultTable } from '../resultTable/ResultTable';
import { Alert } from '../alert/Alert';
import { ITEMS_PER_PAGE } from '../resultTable/consts';
import { LoadingIndicator } from '../loadingIndicator/LoadingIndicator';
import { useFetchSearchResult } from './hooks';
import { Header } from '../header/Header';

export const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const { searchResult, requestError, isLoading } = useFetchSearchResult(searchQuery);

  return (
    <Container className={"py-2"}>
      <Header />
      <Row className={"mt-4"}>
        <Col>
          {requestError && <Alert errorMessage={requestError} />}
          <Search onSearch={setSearchQuery}/>
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
