import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import game from './game';

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  game,
});

export default rootReducer;
