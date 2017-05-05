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
//   match({ routes, location: req.url }, (error, redirectLocation, renderProps) =>
//     Promise.all(compact(prepareData(store, renderProps))).then(() => {
//       const initialState = JSON.stringify(store.getState());
//
//       const content = ReactDOMServer.renderToString(
//         React.createElement(
//           Provider,
//           { store },
//           React.createElement(RouterContext, renderProps)
//         )
//       );
//
//       res.status(200);
//       res.render(
//         'index',
//         { initialState, content }
//       );
//     })
//   );
// };

export default (req, res) => {
  return match({ routes, location: req.url }, prepareAndRender);

  function prepareAndRender(error, redirectLocation, renderProps) {
    const prepareDataPromise = Promise.all(
      compact(prepareData(store, renderProps))
    );

    const renderIndex = () => {
      const initialState = JSON.stringify(store.getState());
      const content = ReactDOMServer.renderToString(
        React.createElement(
          Provider,
          { store },
          React.createElement(RouterContext, renderProps)
        )
      );

      res.status(200);
      res.render(
        'index',
        { initialState, content }
      );
    };

    prepareDataPromise
      .then(renderIndex);
  }
};

// export default (req, res) => {
//   match(
//     { routes, location: req.url },
//     (error, redirectLocation, renderProps) => {
//       const prepareDataPromise = Promise.all(
//         compact(prepareData(store, renderProps))
//       );
//
//       const promiseCb = () => {
//         const initialState = JSON.stringify(store.getState());
//         const content = ReactDOMServer.renderToString(
//           React.createElement(
//             Provider,
//             { store },
//             React.createElement(RouterContext, renderProps)
//           )
//         );
//         const renderIndex = () => {
//           res.status(200);
//           res.render(
//             'index',
//             { initialState, content }
//           );
//         };
//
//         renderIndex();
//       };
//
//       prepareDataPromise
//         .then(promiseCb);
//     }
//   );
// };

// export default (req, res) => {
//   const callBack =  (error, redirectLocation, renderProps) => {
//     const initialState = JSON.stringify(store.getState());
//     const content = ReactDOMServer.renderToString(
//       React.createElement(
//         Provider,
//         { store },
//         React.createElement(RouterContext, renderProps)
//       )
//     );
//     const renderIndex = () => {
//       res.status(200);
//       res.render(
//         'index',
//         { initialState, content }
//       );
//     };
//
//     return Promise.all(compact(prepareData(store, renderProps)))
//       .then(renderIndex);
//   };
//
//   return match({ routes, location: req.url }, callBack);
// };

// export default function(req, res) {
//   function callBack(error, redirectLocation, renderProps) {
//     const initialState = JSON.stringify(store.getState());
//     const content = ReactDOMServer.renderToString(
//       React.createElement(
//         Provider,
//         { store },
//         React.createElement(RouterContext, renderProps)
//       )
//     );
//     function renderIndex() {
//       // console.log(initialState);
//       // console.log(content);
//       res.status(200);
//       res.render(
//         'index',
//         { initialState, content }
//       );
//     }
//
//     Promise.all(compact(prepareData(store, renderProps)))
//       .then(renderIndex);
//   }
//
//   return match({ routes, location: req.url }, callBack);
// }
