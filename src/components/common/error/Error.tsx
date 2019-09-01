import React from 'react';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import './Error.css';

const Error = () => (
  <div className="error-container">
    <SnackbarContent
      className="error"
      message="Oops, something went wrong!"
    />
  </div>
);

export default Error;
