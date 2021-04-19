import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import genresReducer from './reducers/genresReducer';
import playlistReducer from './reducers/playlistReducer';
import songInfoReducer from './reducers/songInfoReducer';
import testReducer from './reducers/testReducer';

const reducers = combineReducers({
  test: testReducer,
  playlists: playlistReducer,
  songInfo: songInfoReducer,
  genres: genresReducer
});

const logger = createLogger({
  collapsed: true
});

export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk, logger)));