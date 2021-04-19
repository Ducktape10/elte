import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import TestReducer from './reducers/TestReducer';

const reducers = combineReducers({
  test: TestReducer
});

const logger = createLogger({
  collapsed: true
});

export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk, logger)));