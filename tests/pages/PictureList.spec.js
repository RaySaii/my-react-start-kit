// Must have at least one test file in this directory or Mocha will throw an error.
import React from 'react';
import { shallow } from 'enzyme';
import HomePage from '../../src/pages/HomePage';

describe('<HomePage />', () => {
  it('should have a header called \'React is great!!!\'', () => {
    const wrapper = shallow(<HomePage  />);
    const actual = wrapper.find('h1').text();
    const expected = 'React is great!!!';

    expect(actual).toEqual(expected);
  });

});
