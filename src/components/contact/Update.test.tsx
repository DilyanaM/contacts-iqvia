import React from 'react';
import { createMemoryHistory, createLocation } from 'history';
import { match } from 'react-router';
import { shallow } from 'enzyme';
import Update from './Update';

const history = createMemoryHistory();
const path = `/contacts/:id/update`;

const routeMatch: match<{ id: string }> = {
  isExact: false,
  path,
  url: path.replace(':id', 'LnpKC1t9kaIjJq2zXEkqH'),
  params: {
    id: 'LnpKC1t9kaIjJq2zXEkqH'
  }
};

const location = createLocation(routeMatch.url);

const wrapper = shallow(
  <Update match={routeMatch} location={location} history={history} />
);

it('renders contact to be updated', () => {
  expect(wrapper).toMatchSnapshot();
});
