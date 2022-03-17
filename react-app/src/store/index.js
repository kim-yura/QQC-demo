import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session'
import makerReducer from './maker';
import discountReducer from './discount';
import userReducer from './user';
import groupReducer from './group';
import membershipReducer from './membership';

const rootReducer = combineReducers({
  session,
  makers: makerReducer,
  discounts: discountReducer,
  users: userReducer,
  groups: groupReducer,
  memberships: membershipReducer
});


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
