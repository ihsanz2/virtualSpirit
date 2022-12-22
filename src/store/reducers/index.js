import {combineReducers} from 'redux';
import postReducer from './post.reducer';

const reducers = combineReducers({
  postReducer,
});

export default reducers;
