import React from 'react';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './Main.css';

const Main = () => (
  <Container className="main-container">
    <Box className="inner-container">
      <Typography
        variant="h3"
        className="main-title">
          IQVIA's Contacts List
      </Typography>
      <Link to="/contacts">
        <Button color="primary" variant="contained">View contacts</Button>
      </Link>
    </Box>
  </Container>
)

export default Main;
