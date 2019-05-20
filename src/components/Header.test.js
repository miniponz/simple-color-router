import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header comp', () => {
  it(' renders Header', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
