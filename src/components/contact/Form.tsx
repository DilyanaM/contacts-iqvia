import React, { Component } from "react";
import { Mutation } from 'react-apollo';
import ADD_CONTACT from "../../graphql/mutations/addContact";
import UPDATE_CONTACT from '../../graphql/mutations/updateContact';
import GET_CONTACTS from "../../graphql/queries/contactsList";

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
    mutation: this.props.mutation
  }

  render() {
    const { id, name, email, mutation } = this.state;
    return (
      <div>
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

