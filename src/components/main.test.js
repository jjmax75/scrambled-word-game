/* global it, expect */

import React from 'react';
import { shallow } from 'enzyme';
import Main from './main';

it('Main renders without crashing', () => {
  const component = shallow(<Main />);
  expect(component.exists()).toEqual(true);
});
