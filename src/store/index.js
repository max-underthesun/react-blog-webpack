import { createStore, applyMiddleware, compose } from 'redux';

import reducers from 'reducers';
import DevTools from 'components/containers/DevToolsContainer';
import APIMiddleware from 'middleware/API';

const store = createStore(
  reducers,
  compose(
    applyMiddleware(APIMiddleware),
    DevTools.instrument()
  )
);

export default store;
