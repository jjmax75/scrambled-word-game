/* global it, expect */

import React from 'react';
import { shallow } from 'enzyme';
import Word from './';

it('Word component renders without crashing', () => {
  const component = shallow(<Word />);
  expect(component.exists()).toEqual(true);
});
