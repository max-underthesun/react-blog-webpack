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
    if (error) {
      render500(res);
      return;
    }
    if (redirectLocation) {
      res.redirect(redirectLocation.pathname + redirectLocation.search);
      return;
    }
    if (renderProps === undefined) {
      render404(res);
      return;
    }

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

    Promise.all(compact(prepareData(store, renderProps)))
      .then(getContentAndRenderIndex)
      .catch(error => res.send(error.message));
  }
};

function renderIndex(res, initialState, content) {
  res.status(200);
  res.render(
    'index',
    { initialState, content }
  );
}

function render500(res) {
  res.status(500);
  res.render(
    'error',
    {
      status: '500',
      message: 'If you are the application owner, please check the logs.'
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
