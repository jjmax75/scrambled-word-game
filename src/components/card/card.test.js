/* global it, expect */

import React from 'react';
import { shallow } from 'enzyme';
import Card from './';

it('Card component renders without crashing', () => {
  const component = shallow(<Card />);
  expect(component.exists()).toEqual(true);
});
