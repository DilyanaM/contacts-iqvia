import React, { Component } from "react";
import { RouteComponentProps } from "react-router";
import { Query } from 'react-apollo';
import GET_CONTACT from '../../graphql/queries/contact';
import Form from './Form';

class Update extends Component<RouteComponentProps<any>> {
  render() {
    const { id } = this.props.match.params;

    return (
      <Query query={GET_CONTACT} variables={{ id }}>
        {({ loading, error, data }) => {
          if (loading) return <div>Loading</div>;
          if (error) return <div>Error</div>;

          return (
            <Form
              title="Edit contact"
              id={id}
              name={data.contact.name}
              email={data.contact.email}
              mutation="UPDATE_CONTACT"
            />
          );
        }}
      </Query>
    );
  }
}

export default Update;

