/* global it, expect */

import React from 'react';
import { shallow } from 'enzyme';
import Answer from './';

it('Answer component renders without crashing', () => {
  const component = shallow(<Answer />);
  expect(component.exists()).toEqual(true);
});
