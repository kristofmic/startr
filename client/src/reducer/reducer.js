import set from 'lodash/fp/set';

import reducerFactory from './reducerFactory';

import { ACTION } from '../actions';

const initialState = {
  payload: {}
};

const handlers = {
  [ACTION](state, action) {
    return set(['payload'], action.payload, state);
  },
};

const reducer = reducerFactory(initialState, handlers);
export default reducer;

