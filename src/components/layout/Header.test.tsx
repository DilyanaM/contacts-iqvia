import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const wrapper = shallow(<Header />);

it('renders link to home page', () => {
  const linkHomePage = 
    <Link to="/">
      <Button size="large" color="secondary" variant="text">
        IQVIA
      </Button>
    </Link>;
  expect(wrapper.contains(linkHomePage)).toBe(true);
});

it('renders link to contacts', () => {
  const linkContacts = 
    <Link to="/contacts">
      <Button size="small" color="secondary" variant="text">
        Contacts
      </Button>
    </Link>;
  expect(wrapper.contains(linkContacts)).toBe(true);
});
