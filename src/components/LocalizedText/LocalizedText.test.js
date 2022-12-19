import renderer from 'react-test-renderer';
import { LocalizedText } from './LocalizedText'


describe('Localized Text Component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<LocalizedText />).toJSON();
    expect(tree).toMatchSnapshot();
  })
})


