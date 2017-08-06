/* global it, expect */

import React from 'react';
import { shallow } from 'enzyme';
import Game from './game';

it('Main renders without crashing', () => {
  const component = shallow(<Game />);
  expect(component.exists()).toEqual(true);
});
