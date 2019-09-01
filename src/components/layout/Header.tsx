import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import './Header.css';

const Header = () => (
  <AppBar color="primary" className="header">
    <Link to="/">
      <Button
        size="large"
        color="secondary"
        variant="outlined">
          IQVIA
      </Button>
    </Link>
    <Link to="/contacts">
      <Button
        size="small"
        color="secondary"
        variant="outlined">
          Contacts
      </Button>
    </Link>
  </AppBar>
);

export default Header;
