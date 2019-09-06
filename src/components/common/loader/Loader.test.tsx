import React from 'react';
import { shallow } from 'enzyme';
import Loader from './Loader';
import LinearProgress from '@material-ui/core/LinearProgress';

const wrapper = shallow(<Loader />);

it('renders loading progress bar', () => {
  const loader = <LinearProgress />;
  expect(wrapper.contains(loader)).toBe(true);
});
