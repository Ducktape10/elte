import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import TestReducer from './reducers/TestReducer';
import SongReducer from './reducers/SongReducer';
import PlaylistsReducer from './reducers/PlaylistsReducer';
import CatReducer from './reducers/CatReducer';

const reducers = combineReducers({
  test: TestReducer,
  song: SongReducer,
  playlists: PlaylistsReducer,
  cat: CatReducer
});

const logger = createLogger({
  collapsed: true
});

export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk, logger)));