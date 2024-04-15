import { combineReducers } from 'redux';
import counterReducer from './reducers/counter.jsx';

const rootReducer = combineReducers({
  counter: counterReducer,
  // other reducers if any
});

export default rootReducer;

