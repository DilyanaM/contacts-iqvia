import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import ADD_CONTACT from '../../graphql/mutations/addContact';
import UPDATE_CONTACT from '../../graphql/mutations/updateContact';
import GET_CONTACTS from '../../graphql/queries/contactsList';
import { Redirect } from 'react-router';

class Form extends Component<{
  id: string,
  name: string,
  email: string
  mutation: string
}> {
  state = {
    id: this.props.id ? this.props.id : '',
    name: this.props.name,
    email: this.props.email,
    mutation: this.props.mutation,
    redirect: false
  }

  render() {
    const { id, name, email, mutation, redirect } = this.state;
    return (
      <div>
        {!!redirect && <Redirect to="/contacts" />}
        <input
          value={name}
          onChange={e => this.setState({
            name: e.target.value
          })}
          required
        />
        <input
          value={email}
          onChange={e => this.setState({
            email: e.target.value
          })}
          required
        />
        <Mutation
          mutation={mutation === 'ADD_CONTACT' ? ADD_CONTACT : UPDATE_CONTACT}
          refetchQueries={() => [{ query: GET_CONTACTS }]}
          onCompleted={() => {
            this.setState({
              redirect: true
            })
          }}
        >
          {(onMutate) => {
            const submit = () => {
              mutation === 'ADD_CONTACT'
                ? onMutate({ variables: { name, email } })
                : onMutate({ variables: { id, name, email } })
            };
            return (
              <button
                onClick={submit}
                disabled={name === '' || email === ''}
              >
                Submit
              </button>
            )
          }}
        </Mutation>
      </div>
    );
  }
}

export default Form;

