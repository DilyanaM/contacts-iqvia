import React, { Component } from "react";
import Form from './Form';

class Add extends Component<{}, {id: string, name: string, email: string}> {
  constructor(props: any) {
    super(props);

    this.state = {
      id: '',
      name: '',
      email: ''
    }
  }

  render() {
    const { id, name, email } = this.state;

    return (
      <Form
        title="Add contact"
        id={id}
        name={name}
        email={email}
        mutation="ADD_CONTACT"
      />
    );
  }
}

export default Add;

