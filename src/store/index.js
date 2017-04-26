import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';


import reducers from 'reducers';
import DevTools from 'components/containers/DevToolsContainer';
import APIMiddleware from 'middleware/API';

const store = createStore(
  reducers,
  compose(
    // applyMiddleware(thunk),
    applyMiddleware(APIMiddleware),
    DevTools.instrument()
  )
);

export default store;
