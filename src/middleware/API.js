import request from 'superagent';
import { assign, pick } from 'lodash/object';
import { stringify } from 'qs';

import { SERVER_URL } from 'constants/ServerUrl';
import { API_CALL } from 'constants/middleware/API';

function APICall({ endpoint, method, query, payload }) {
  return new Promise((resolve, reject) => {
    let r = request[method.toLowerCase()](`${SERVER_URL}${endpoint}`);

    if (query)
      r.query(stringify(query));

    if (payload)
      r = r.send(payload);

    r.end((error, data) => (
      error ?
        reject(error)
      : resolve(data.body)
    ));
  });
}

const nextAction = (action, data) => (
  assign({}, action, data, { [API_CALL]: undefined })
);

// eslint-disable-next-line
export default (store) => (next) => (action) => {
  if (!action[API_CALL]) return next(action);

  const [requestType, successType, failureType] = action[API_CALL].types;

  next(nextAction(action, { type: requestType }));

  const requestApiPromise = APICall(
    pick(action[API_CALL], ['endpoint', 'method', 'query', 'payload'])
  );

  const requestSuccess = (response) => next(
    nextAction(action, { response, type: successType })
  );

  const requestError = (error) => next(
    nextAction(action, { error, type: failureType })
  );

  requestApiPromise
    .then(requestSuccess)
    .catch(requestError);

  return requestApiPromise;
};
