import React, { Component } from "react";
import Form from './Form';

class Add extends Component {
  state = {
    id: '',
    name: '',
    email: ''
  }

  render() {
    const { id, name, email } = this.state;

    return (
      <Form
        id={id}
        name={name}
        email={email}
        mutation="ADD_CONTACT"
        title="Add contact"
      />
    );
  }
}

export default Add;

