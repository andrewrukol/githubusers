import React from 'react';
import AlertBootstrap from 'react-bootstrap/Alert';

export interface AlertProps {
  errorMessage: string;
}

export const Alert: React.FC<AlertProps> = ({ errorMessage }) =>(
    <AlertBootstrap variant={"danger"}>
      {errorMessage}
    </AlertBootstrap>
  );
