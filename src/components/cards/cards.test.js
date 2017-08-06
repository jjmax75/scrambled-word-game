/* global it, expect */

import React from 'react';
import { shallow } from 'enzyme';
import Cards from './';

it('Cards component renders without crashing', () => {
  const component = shallow(<Cards />);
  expect(component.exists()).toEqual(true);
});
