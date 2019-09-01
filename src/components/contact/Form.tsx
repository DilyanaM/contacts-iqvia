import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Mutation } from 'react-apollo';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ADD_CONTACT from '../../graphql/mutations/addContact';
import UPDATE_CONTACT from '../../graphql/mutations/updateContact';
import GET_CONTACTS from '../../graphql/queries/contactsList';
import './Contact.css';

class Form extends Component<{
  id: string,
  name: string,
  email: string
  mutation: string,
  title: string
}> {
  state = {
    id: this.props.id ? this.props.id : '',
    name: this.props.name,
    email: this.props.email,
    mutation: this.props.mutation,
    title: this.props.title,
    redirect: false
  }

  render() {
    const { id, name, email, mutation, redirect, title } = this.state;
    return (
      <div className="contact-form">
        {!!redirect && <Redirect to="/contacts" />}
        <Typography variant="h4" className="form-title">{title}</Typography>
        <TextField
          required
          id="name"
          className="form-input"
          label="Name"
          value={name}
          margin="normal"
          variant="outlined"
          onChange={e => this.setState({
            name: e.target.value
          })}
        />
        <TextField
          required
          id="email"
          className="form-input"
          label="Email"
          value={email}
          margin="normal"
          variant="outlined"
          onChange={e => this.setState({
            email: e.target.value
          })}
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
              <Button
                onClick={submit}
                disabled={name === '' || email === ''}
                variant="contained"
                color="secondary"
                size="large"
                className="submit"
              >
                Submit
              </Button>
            )
          }}
        </Mutation>
      </div>
    );
  }
}

export default Form;

