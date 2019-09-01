import React from 'react';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import './Main.css';

const Main = () => (
  <Container className="main-container">
    <h1>IQVIA's Contact List</h1>
    <Link to="/contacts">
      <Button color="primary" variant="contained">View contacts</Button>
    </Link>
  </Container>
)

export default Main;
