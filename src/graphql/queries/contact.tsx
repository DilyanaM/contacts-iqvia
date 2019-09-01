import { gql } from 'apollo-boost';

const GET_CONTACT = gql`
  query Contact($id: ID!) {
    contact(id: $id) {
      id,
      name,
      email
    }
  }
`;

export default GET_CONTACT;
