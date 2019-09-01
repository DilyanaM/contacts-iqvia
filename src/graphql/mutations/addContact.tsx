import { gql } from 'apollo-boost';

const ADD_CONTACT = gql`
  mutation AddContact($name: String!, $email: String!) {
    addContact(contact: {
      name: $name,
      email: $email
    }){
      id
      name
      email
    }
  }
`;

export default ADD_CONTACT;
