import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Counter from '../Components/Counter';

configure({adapter: new Adapter()});
jest.spyOn(console, 'log');

test('Greet Charlie once button is clicked', () => {
    const CounterComponentWrapper = shallow(<Counter/>)
    CounterComponentWrapper.find('#cgName').simulate('click')
    const countText = CounterComponentWrapper.find("#greet");
    expect(countText.text()).toContain('Hi Charlie')
  })

