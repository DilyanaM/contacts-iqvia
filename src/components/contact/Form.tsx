import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Mutation } from 'react-apollo';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ADD_CONTACT from '../../graphql/mutations/addContact';
import UPDATE_CONTACT from '../../graphql/mutations/updateContact';
import GET_CONTACTS from '../../graphql/queries/contactsList';
import validateField from './../../utils/formValidation';
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
    redirect: false,
    nameValid: this.props.mutation === 'ADD_CONTACT' ? false : true,
    emailValid: this.props.mutation === 'ADD_CONTACT' ? false : true,
    nameError: 'Name should be at least 3 characters',
    emailError: 'Not a valid email',
    nameTouched: false,
    emailTouched: false
  }

  setFieldValue = (e: any) => {
    const { name, value } = e.target;
    if (name === 'name') {
      this.setState({
        name: value,
        nameValid: validateField(name, value)
      });
    } else {
      this.setState({
        email: value,
        emailValid: validateField(name, value)
      });
    }
    this.setFieldTouched(e);
  }

  setFieldTouched = (e: any) => {
    const { name } = e.target;
    if (name === 'name') {
      this.setState({
        nameTouched: true
      })
    } else {
      this.setState({
        emailTouched: true
      })
    }
  }

  redirect = () => this.setState({ redirect: true });

  render() {
    const {
      id,
      name,
      email,
      mutation,
      redirect,
      title,
      nameValid,
      emailValid,
      nameTouched,
      emailTouched,
      nameError,
      emailError
    } = this.state;
    return (
      <div className="contact-form">
        {!!redirect && <Redirect to="/contacts" />}
        <Typography variant="h4" className="form-title">{title}</Typography>
        <TextField
          required
          name="name"
          className="form-input"
          label="Name"
          value={name}
          margin="normal"
          variant="outlined"
          onChange={this.setFieldValue}
          onBlur={this.setFieldTouched}
          error={!nameValid && nameTouched}
          helperText={!nameValid && nameTouched ? nameError : ''}
        />
        <TextField
          required
          name="email"
          className="form-input"
          label="Email"
          value={email}
          margin="normal"
          variant="outlined"
          onChange={this.setFieldValue}
          onBlur={this.setFieldTouched}
          error={!emailValid && emailTouched}
          helperText={!emailValid && emailTouched ? emailError : ''}
        />
        <Mutation
          mutation={mutation === 'ADD_CONTACT' ? ADD_CONTACT : UPDATE_CONTACT}
          refetchQueries={() => [{ query: GET_CONTACTS }]}
          onCompleted={this.redirect}
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
                disabled={!nameValid || !emailValid}
                variant="contained"
                color="primary"
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

