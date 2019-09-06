import React from 'react';
import { shallow } from 'enzyme';
import Error from './Error';
import SnackbarContent from '@material-ui/core/SnackbarContent';

const wrapper = shallow(<Error />);

it('renders error message', () => {
  const error = 
    <div className="error-container">
      <SnackbarContent
        className="error"
        message="Oops, something went wrong!"
      />
    </div>;
  expect(wrapper.contains(error)).toBe(true);
});
