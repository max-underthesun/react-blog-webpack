import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { match, RouterContext } from 'react-router';
import { compact } from 'lodash/array';
import Helmet from 'react-helmet';

import createStore from 'store';
import routes from 'routes';

import prepareData from 'helpers/routes/prepareData';
import webpackAsset from  './webpackAsset';
// const store = createStore();

export default (req, res) => {
  const store = createStore();
  return match({ routes, location: req.url }, prepareDataAndRender);

  function prepareDataAndRender(error, redirectLocation, renderProps) {
    if (noRender(res, error, redirectLocation, renderProps)) return;

    const head = Helmet.rewind();

    const getContentAndRenderIndex = () => {
      const initialState = JSON.stringify(store.getState());
      const content = ReactDOMServer.renderToString(
        React.createElement(
          Provider,
          { store },
          React.createElement(RouterContext, renderProps)
        )
      );
      renderIndex(res, initialState, content, head);
    };

    // function respondError(error) { res.send(error); }
    function respondError(error) { renderError(error, res); }

    Promise.all(compact(prepareData(store, renderProps)))
      .then(getContentAndRenderIndex)
      .catch(respondError);
  }
};

function renderError(error, res) {
  if (error.status == 500) { render500(res, error.response.text); }
  else if (error.status == 404) { render404(res); }
  else { res.status(error.status).send(error.response.text); }
}

function noRender(res, error, redirectLocation, renderProps) {
  if (error) {
    render500(res);
    return true;
  }
  if (redirectLocation) {
    res.redirect(redirectLocation.pathname + redirectLocation.search);
    return true;
  }
  if (renderProps === undefined) {
    render404(res);
    return true;
  }
  return false;
}

function renderIndex(res, initialState, content, head) {
  res.status(200);
  res.render(
    'index',
    { initialState, content, head, webpackAsset }
  );
}

function render500(res, message) {
  const messDef = 'If you are the application owner, please check the logs.';
  const text = message || messDef;
  res.status(500);
  res.render(
    'error',
    { status: '500', message: text }
  );
}

function render404(res) {
  res.status(404);
  res.render(
    'error',
    { status: '404', message: 'Not found' }
  );
}

// export default (req, res) => {
//   match({ routes, location: req.url },
//     (error, redirectLocation, renderProps) =>
//       Promise.all(compact(prepareData(store, renderProps))).then(() => {
//         const initialState = JSON.stringify(store.getState());
//
//         const content = ReactDOMServer.renderToString(
//           React.createElement(
//             Provider,
//             { store },
//             React.createElement(RouterContext, renderProps)
//           )
//         );
//
//         res.status(200);
//         res.render(
//           'index',
//           { initialState, content }
//         );
//       })
//   );
// };

/*
++++ issue:
on F5 likes dropes to initial values -
the values witch were on the first load of application after the start of the
server

++++ explanation:

1.
- START server
- while starting server require 'require('./render').default'
- render() function on export from render.js get 'store = createStore();'
- createStore() in render.js fire createStore() from 'store/index'
- createStore create store with EMPTY state
- server listening to port 3000

2.
- ENTER LOCATION to the browser
- browser send request to server with url

3.
- server fire render() on receiving request
- render() fire prepareData() inside of Promise.all
- prepareData() fire rote.prepareData() according to location
- since it is SERVER SIDE initialLoad() returns 'false'
- prepareData() fire dispatch(fetchPosts)
- render() get data and resolve promise (fire getContentAndRenderIndex())
- getContentAndRenderIndex() form initialState and content - ????
- render() send to browser index.ejs with 'content' and 'initialState'

4.
- on F5 browser send request with url
- server fire render()
- render() fire prepareData()
- prepareData() check store (server side store!) and find data (old!) in it
- prepareData didn't fire dispatch(fetchPosts)
- render() render index.ejs with old store and send it to the browser

+++++ solution:
move  store creation 'const store = createStore();' from outside of default
'render.js' function to inside the function... in this way the store will be
renewed every time the function called and no old data will be used

*/
