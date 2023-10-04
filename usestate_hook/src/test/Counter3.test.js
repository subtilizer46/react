import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Counter from '../Components/Counter';

configure({adapter: new Adapter()});
jest.spyOn(console, 'log');

test('Greet guest by default', () => {
    const CounterComponentWrapper = shallow(<Counter/>)
    const countText = CounterComponentWrapper.find("#greet");
    expect(countText.text()).toContain('Hi Guest')
  })

