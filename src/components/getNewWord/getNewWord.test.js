/* global it, expect */

import React from 'react';
import { shallow } from 'enzyme';
import GetNewWord from './';

it('GetNewWord component renders without crashing', () => {
  const component = shallow(<GetNewWord />);
  expect(component.exists()).toEqual(true);
});
