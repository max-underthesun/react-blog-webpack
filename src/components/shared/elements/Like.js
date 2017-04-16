// import React, { DOM, PropTypes } from 'react';
import React, { DOM } from 'react';
// import { bind } from 'lodash';
import { Button } from 'semantic-ui-react';

import { connect } from 'react-redux';
import { addLike } from 'actions/PostsAction';

// function like(id) {
//   const { items, dispatch } = this.props;
//   const index = items.findIndex(function(obj) { return obj.id == id; });
//   dispatch(addLike(index));
// }

// const stateToProps = (state) => ({
//   // count: state.posts.entries.
//   // items: state.posts.entries,
//   // isFetching: state.posts.isFetching,
//   // error: state.posts.error,
//   // currentPage: state.posts.currentPage
// });

const actionsToProps = (dispatch, ownProps) => ({
  like: () => dispatch(addLike(ownProps.id))
  // like: (id) => {
  //   const index = items.findIndex(function(obj) { return obj.id == id; });
  //   return dispatch(addLike(id));
  // }
});

// export default connect(stateToProps, actionsToProps)(LikeBox);

// class Like extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleClick = bind(this.handleClick, this);
//   }
//
//   handleClick() {
//     return this.props.like(this.props.id);
//   }
//
//   render() {
//     return React.createElement(
//       LikeBox,
//       { count: this.props.meta.count, handleClick: this.handleClick }
//     );
//   }
// }

// const LikeBox = (props) => (
const Like = (props) => (
  DOM.div(
    { className: 'like-box' },
    React.createElement(
      Button,
      {
        // onClick: props.handleClick,
        // onClick: props.like(props.id),
        onClick: props.like,
        color: 'grey',
        content: 'Like',
        // content: `Like ${props.id}`,
        icon: 'thumbs up',
        label: {
          // content: props.count,
          content: props.meta.count,
          basic: true,
          color: 'grey',
          pointing: 'left'
        }
      }
    )
  )
);

// const LikeBox = (props) => {
//   // console.log(props)
//   return DOM.div(
//     { className: 'like-box' },
//     React.createElement(
//       Button,
//       {
//         // onClick: props.handleClick,
//         onClick: props.like,
//         color: 'grey',
//         content: 'Like',
//         icon: 'thumbs up',
//         label: {
//           // content: props.count,
//           content: props.meta.count,
//           basic: true,
//           color: 'grey',
//           pointing: 'left'
//         }
//       }
//     )
//   );
// };

// Like.propTypes = {
//   id: PropTypes.number.isRequired,
//   like: PropTypes.func.isRequired,
//   meta: PropTypes.object.isRequired
// };

// export default Like;
// export default connect(stateToProps, actionsToProps)(LikeBox);
export default connect(null, actionsToProps)(Like);


    // import React, { DOM } from 'react';
    // import { Button } from 'semantic-ui-react';
    //
    // import { connect } from 'react-redux';
    // import { addLike } from 'actions/PostsAction';
    //
    // const actionsToProps = (dispatch) => ({
    //   like: (id) => dispatch(addLike(id))
    // });
    //
    // const LikeBox = (props) => (
    //   DOM.div(
    //     { className: 'like-box' },
    //     React.createElement(
    //       Button,
    //       {
    //         onClick: props.like,
    //         color: 'grey',
    //         content: 'Like',
    //         icon: 'thumbs up',
    //         label: {
    //           content: props.meta.count,
    //           basic: true,
    //           color: 'grey',
    //           pointing: 'left'
    //         }
    //       }
    //     )
    //   )
    // );
    //
    // export default connect(null, actionsToProps)(LikeBox);
