import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import HeaderComponent from '../components/HeaderComponent';

configure({adapter: new Adapter()});

test('Body renders BodyLeft component', () => {
    const HeaderWraper = shallow(<HeaderComponent />)
    const HeaderForm = HeaderWraper.find('ViewTitleComponent')
    
    HeaderForm.props().handleChangeRef("Stackroute");

    expect(HeaderWraper.state('value')).toEqual('Stackroute');
});