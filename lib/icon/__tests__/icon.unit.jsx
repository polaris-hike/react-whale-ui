import renderer from 'react-test-renderer';
import React from 'react';
import Icon from '../icon';
import { mount } from 'enzyme';

describe('Icon', () => {
  it('是个 svg', () => {
    const json = renderer.create(<Icon name="wechat"/>).toJSON();
    expect(json).toMatchSnapshot();
  });
  it('onclick', () => {
    const fn = jest.fn();
    const wrapper = mount((
      <Icon onClick={fn} />
    ));
    //const component = mount(<Icon name="wechat" onClick={fn}/>);
    wrapper.find('svg').simulate('click');
    expect(fn).toBeCalled();
  })
});