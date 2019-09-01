import { gql } from 'apollo-boost';

const GET_CONTACTS = gql`
  {
    contacts {
      id,
      name,
      email
    }
  }
`;

export default GET_CONTACTS;
