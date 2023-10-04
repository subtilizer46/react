import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Form from '../Components/Form';

configure({adapter: new Adapter()});

test('Body renders BodyLeft component', () => {
    const FormWrapper = shallow(<Form />)
    const forms = FormWrapper.find('input')

    forms.props().onChange({target: {
        value: 'Charlie'
      }});

      const nameText = FormWrapper.find("#name");
      expect(nameText.text()).toContain('Name value: Charlie')
});