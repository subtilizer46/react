import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import BodyComponent from '../components/BodyComponent';

configure({adapter: new Adapter()});

test('Body renders BodyLeft component', () => {
    const BodyComponentWrapper = shallow(<BodyComponent />)
    const forms = BodyComponentWrapper.find('input')

    forms.props().onChange({target: {
        value: 'Stackroute'
      }});

    expect(BodyComponentWrapper.state('value')).toEqual('Stackroute');
});