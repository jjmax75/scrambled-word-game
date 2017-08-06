/* global it, expect */

import React from 'react';
import { shallow } from 'enzyme';
import Message from './';

it('Message component renders without crashing', () => {
  const component = shallow(<Message />);
  expect(component.exists()).toEqual(true);
});
