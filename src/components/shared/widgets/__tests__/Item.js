import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import createStore from 'store';

import Link from 'components/shared/elements/Link';
import BlogItem from '../BlogItem';

describe('BlogItem', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const store = createStore({});
    // ReactDOM.render(<BlogItem />, div);
    ReactDOM.render(<Provider store={store}><BlogItem /></Provider>, div);
  });

  describe('render', () => {
    it('should render the title', () => {
      const itemProps = { title: 'Hello, World!', id: 5 };

      // const item = shallow(<BlogItem item={itemProps} />);
      const item = shallow(
        React.createElement(BlogItem, itemProps)
      );
      const header = <Link to="/posts/5">Hello, World!</Link>;

      expect(item.contains(header)).toEqual(true);
    });

    it('should render usual item', () => {
      const itemProps = {
        title: 'Hello, World!',
        id: 1,
        image: {
          alt: 'Hello, World',
          src: 'dist/images/img1-lg.jpg'
        }
      };

      const item = shallow(<BlogItem item={itemProps} />);

      expect(item).toMatchSnapshot();
    });
  });
});
