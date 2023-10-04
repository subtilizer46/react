import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Counter from '../Components/Counter';

configure({adapter: new Adapter()});
jest.spyOn(console, 'log');

test('Increment button has to increase count by 1', () => {
    const CounterComponentWrapper = shallow(<Counter/>)
    CounterComponentWrapper.find('#inc').simulate('click')
    CounterComponentWrapper.find('#inc').simulate('click')
    const countText = CounterComponentWrapper.find("#cnt");
    expect(countText.text()).toContain('Count: 2')
  })

