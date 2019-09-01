import { gql } from 'apollo-boost';

const UPDATE_CONTACT = gql`
  mutation UpdateContact($id: ID!, $name: String, $email: String) {
    updateContact(contact: {
      id: $id,
      name: $name,
      email: $email
    }){
      id,
      name,
      email
    }
  }
`;

export default UPDATE_CONTACT;
