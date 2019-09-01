import React, { Component } from "react";
import { RouteComponentProps } from "react-router";
import { Query } from 'react-apollo';
import GET_CONTACT from '../../graphql/queries/contact';
import Form from './Form';
import Loader from './../common/loader/Loader';
import Error from './../common/error/Error';

class Update extends Component<RouteComponentProps<any>> {
  render() {
    const { id } = this.props.match.params;

    return (
      <Query query={GET_CONTACT} variables={{ id }}>
        {({ loading, error, data }) => {
          if (loading) return <Loader />;
          if (error) return <Error />;

          return (
            <Form
              id={id}
              name={data.contact.name}
              email={data.contact.email}
              mutation="UPDATE_CONTACT"
              title="Edit contact"
            />
          );
        }}
      </Query>
    );
  }
}

export default Update;

