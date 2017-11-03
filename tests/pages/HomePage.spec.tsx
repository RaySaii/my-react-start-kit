// Must have at least one test file in this directory or Mocha will throw an error.
import * as React from 'react';
import { shallow } from 'enzyme';
import HomePage from '../../src/pages/HomePage';

describe('<HomePage />', () => {
  it('should have a header called \'Get Started\'', () => {
    const wrapper = shallow(<HomePage/>);
    const actual = wrapper.find('h2').text();
    const expected = 'Get Started';

    expect(actual).toEqual(expected);
  });

});
