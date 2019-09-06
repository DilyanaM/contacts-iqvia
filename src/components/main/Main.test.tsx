import React from 'react';
import { shallow } from 'enzyme';
import Main from './Main';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const wrapper = shallow(<Main />);

it('renders heading', () => {
  const heading = 
    <Typography variant="h3" className="main-title">
      IQVIA's Contact Manager
    </Typography>;
  expect(wrapper.contains(heading)).toBe(true);
});

it('renders button', () => {
  const button = 
    <Link to="/contacts">
      <Button color="secondary" variant="contained">View contacts</Button>
    </Link>
  expect(wrapper.contains(button)).toBe(true);
});
