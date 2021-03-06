import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

export const LoadingIndicator: React.FC = () => (
  <div className="d-flex justify-content-center">
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
);
