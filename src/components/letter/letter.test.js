/* global it, expect */

import React from 'react';
import { shallow } from 'enzyme';
import Letter from './';

it('Letter component renders without crashing', () => {
  const component = shallow(<Letter />);
  expect(component.exists()).toEqual(true);
});
