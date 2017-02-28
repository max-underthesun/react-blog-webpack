import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from 'reducers';
import DevTools from 'components/containers/DevToolsContainer';

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    DevTools.instrument()
  )
);

export default store;
