import { gql } from 'apollo-boost';

const DELETE_CONTACT = gql`
  mutation DeleteContact($id: ID!) {
    deleteContact(id: $id)
  }
`;

export default DELETE_CONTACT;
