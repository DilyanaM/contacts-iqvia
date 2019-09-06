import React from 'react';
import { createMemoryHistory, createLocation } from 'history';
import { match } from 'react-router';
import { shallow } from 'enzyme';
import Update from './Update';

const history = createMemoryHistory();
const path = `/route/:id`;

const routeMatch: match<{ id: string }> = {
  isExact: false,
  path,
  url: path.replace(':id', '1'),
  params: {
    id: '1'
  }
};

const location = createLocation(routeMatch.url);

const wrapper = shallow(
  <Update match={routeMatch} location={location} history={history} />
);

it('renders contact to be updated', () => {
  expect(wrapper).toMatchSnapshot();
});
