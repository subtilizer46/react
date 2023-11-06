import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Calculator from '../calculator/calculator';

Enzyme.configure({adapter: new Adapter()});

test("checking value of result after addition gets called", () => {
    const wrapper = shallow(<Calculator/>);
    wrapper.find('#increment1').simulate('click');
    wrapper.find('#increment1').simulate('click');

    wrapper.find('#increment2').simulate('click');
    wrapper.find('#increment2').simulate('click');
    wrapper.find('#increment2').simulate('click');
    wrapper.find('#increment2').simulate('click');

    wrapper.find('#divButton').simulate('click');
    expect(wrapper.find('#counter_value').text()).toBe("2")
})