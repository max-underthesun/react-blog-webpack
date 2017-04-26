import { connect } from 'react-redux';

import Like from 'components/shared/elements/Like';
import { addLike } from 'actions/PostsAction';

const actionsToProps = (dispatch, ownProps) => ({
  like: () => dispatch(addLike(ownProps.id))
});

export default connect(null, actionsToProps)(Like);
