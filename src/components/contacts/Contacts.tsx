import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import List from '../list/List';
import Loader from './../common/loader/Loader';
import Error from './../common/error/Error';
import GET_CONTACTS from '../../graphql/queries/contactsList';
import './Contacts.css';

const Contacts = () => {
  const { loading, error, data } = useQuery(GET_CONTACTS);
  if (loading) return <Loader />;
  if (error) return <Error />;

  return (
    <Container className="list-container">
      <Box className="top-container">
        <Typography variant="h4" className="list-title">Contacts</Typography>
        <Link to="/contacts/add">
          <Button color="primary" variant="contained">Add New</Button>
        </Link>
      </Box>
      <List contacts={data.contacts} />
    </Container>
  );
};

export default Contacts;
