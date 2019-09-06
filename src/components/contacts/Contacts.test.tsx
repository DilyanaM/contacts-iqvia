import React from 'react';
import { shallow } from 'enzyme';
import { MockedProvider } from '@apollo/react-testing';
import Contacts from './Contacts';
import List from '@material-ui/core/List';
import GET_CONTACTS from '../../graphql/queries/contactsList';


const mocks = [
  {
    request: {
      query: GET_CONTACTS
    },
    result: {
      data: {
        name: "Janet Doe",
        email: "jane@doe.com"
      },
    },
  }
];

const wrapper = shallow(
  <MockedProvider addTypename={false} mocks={mocks}>
    <Contacts />
  </MockedProvider>);

it('should render list of contacts', () => {
  const list = <List />
  expect(wrapper.contains(list));
});
