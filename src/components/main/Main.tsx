import React from 'react';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import './Main.css';

const Main = () => (
  <Container className="main-container">
    <h1>IQVIA</h1>
    <Link to="/contacts">
      <button>View contacts</button>
    </Link>
  </Container>
)

export default Main;
