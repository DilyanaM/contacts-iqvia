import React, { Component } from 'react';
import { RouteComponentProps, Redirect } from "react-router";
import { Link } from 'react-router-dom';
import { Query, Mutation } from 'react-apollo';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import GET_CONTACT from '../../graphql/queries/contact';
import GET_CONTACTS from '../../graphql/queries/contactsList';
import DELETE_CONTACT from '../../graphql/mutations/deleteContact';
import Loader from './../common/loader/Loader';
import Error from './../common/error/Error';
import './Contact.css';

class Contact extends Component<RouteComponentProps<any>> {
  state = {
    redirect: false
  }

  redirect = () => this.setState({ redirect: true });

  render() {
    const { id } = this.props.match.params;
    const { redirect } = this.state;

    return (
      <Query query={GET_CONTACT} variables={{ id }}>
        {({ loading, error, data }) => {
          if (loading) return <Loader />;
          if (error) return <Error />;
          const { name, email } = data.contact;

          return (
            <div className="view-container">
              {!!redirect && <Redirect to="/contacts" />}
              <Typography variant="h4" className="view-title">
                Contact
              </Typography>
              <Typography variant="h5">
                <span className="contact-label">Name: </span>{name}
              </Typography>
              <Typography variant="h6">
                <span className="contact-label">Email: </span>{email}
              </Typography>
              <Box className="buttons-container">
                <Link to={`/contacts/${id}/update`}>
                  <Button variant="contained" color="primary" >
                    Edit
                  </Button>
                </Link>
                <Mutation
                  mutation={DELETE_CONTACT}
                  refetchQueries={() => [{ query: GET_CONTACTS }]}
                  onCompleted={this.redirect}
                >
                  {(onMutate) => {
                    const submit = () => onMutate({ variables: { id } });
                    return (
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={submit}
                      >
                        Delete
                      </Button>
                    )
                  }}
                </Mutation>
              </Box>
            </div>
          );
        }}
      </Query>
    )
  }
}

export default Contact;

