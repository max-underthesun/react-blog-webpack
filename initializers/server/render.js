import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { match, RouterContext } from 'react-router';
import { compact } from 'lodash/array';

import createStore from 'store';
import routes from 'routes';

import prepareData from 'helpers/routes/prepareData';

const store = createStore();

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

export default (req, res) => {
  return match({ routes, location: req.url }, prepareDataAndRender);

  function prepareDataAndRender(error, redirectLocation, renderProps) {
    if (noRender(res, error, redirectLocation, renderProps)) return;

    const getContentAndRenderIndex = () => {
      const initialState = JSON.stringify(store.getState());
      const content = ReactDOMServer.renderToString(
        React.createElement(
          Provider,
          { store },
          React.createElement(RouterContext, renderProps)
        )
      );
      renderIndex(res, initialState, content);
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

function renderIndex(res, initialState, content) {
  res.status(200);
  res.render(
    'index',
    { initialState, content }
  );
}

function render500(res, message) {
  const messDef = 'If you are the application owner, please check the logs.';
  const text = message || messDef;
  res.status(500);
  res.render(
    'error',
    {
      status: '500',
      message: text
    }
  );
}

function render404(res) {
  res.status(404);
  res.render(
    'error',
    { status: '404', message: 'Not found' }
  );
}
