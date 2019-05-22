import React from 'react';
import { shallow } from 'enzyme';
import Color from './Color';

describe('Colorcomp', () => {
  it(' renders Color', () => {
    const match = { params: { color : 'blue' } }; 
    const wrapper = shallow(<Color match={match} />);
    expect(wrapper).toMatchSnapshot();
  });
});
