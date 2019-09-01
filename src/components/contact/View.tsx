import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { RouteComponentProps, Redirect } from "react-router";
import { Query, Mutation } from 'react-apollo';
import GET_CONTACT from '../../graphql/queries/contact';
import GET_CONTACTS from '../../graphql/queries/contactsList';
import DELETE_CONTACT from '../../graphql/mutations/deleteContact';

class Contact extends Component<RouteComponentProps<any>> {
  state = {
    redirect: false
  }

  render() {
    const { id } = this.props.match.params;
    const { redirect } = this.state;

    return (
      <Query query={GET_CONTACT} variables={{ id }}>
        {({ loading, error, data }) => {
          if (loading) return <div>Loading</div>;
          if (error) return <div>Error</div>;
          const { name, email } = data.contact;

          return (
            <div>
              {!!redirect && <Redirect to="/contacts" />}
              <p>{name}</p>
              <p>{email}</p>
              <Link to={`/contacts/${id}/update`}>
                <button>Edit contact</button>
              </Link>
              <Mutation
                mutation={DELETE_CONTACT}
                refetchQueries={() => [{ query: GET_CONTACTS }]}
                onCompleted={() => this.setState({ redirect: true })}
              >
                {(onMutate) => {
                  const submit = () => onMutate({ variables: { id } });
                  return <button onClick={submit}>Delete</button>
                }}
              </Mutation>
            </div>
          );
        }}
      </Query>
    )
  }
}

export default Contact;

