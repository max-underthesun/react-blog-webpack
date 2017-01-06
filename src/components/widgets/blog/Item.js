import React from 'react';

// import { Button } from 'semantic-ui-react';

import TextBox  from './elements/TextBox';
import Like     from './elements/Like';
// import Meta     from './elements/Meta';
import MetaData     from './elements/Meta';
import Image    from './elements/Image';

// const BlogItem = ({item}) => (
//   <div style={style}>
//     <Button>Like</Button>
//     <Image {...item.image} />
//     <TextBox>{item.title}</TextBox>
//     <Meta { ...item.meta } />
//   </div>
// );

// const style = {
//   padding: '20px 10px',
//   marginBottom: '50px',
//   border: '1px solid #666'
// };

const BlogItem = ({ id, title, image, text, meta, like }) => (
  DOM.div(
    { style: blogItemStyle.outerWrapper },
    DOM.div(
      { style: blogItemStyle.postWrapper },
      React.createElement(TitleBox, { title }),
      React.createElement(Image, image),
      React.createElement(TextBox, text)
    ),
    DOM.br(null),
    React.createElement(MetaData, meta),
    React.createElement(Like, { meta, id, like })
  )
);

BlogItem.propTypes = {
  image: PropTypes.object.isRequired,
  text: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired
};

const blogItemStyle = {
  outerWrapper: {
    border: '3px solid green',
    margin: '10px',
    height: '100%'
  },
  postWrapper: {
    border: '3px solid orange',
    margin: '10px',
    height: '100%',
    overflow: 'hidden'
  }
};

const TitleBox  = ({ title }) => (
  DOM.div(
    { style: titleStyle },
    DOM.h3(null, title)
  )
);

const titleStyle = {
  border: '2px solid red',
  margin: '10px',
  padding: '10px',
  color: 'blue',
};

export default BlogItem;
