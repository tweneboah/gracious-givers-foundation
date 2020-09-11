import { combineReducers } from 'redux';
import usersReducer from '../reducers/users/usersReducer';
import duesReducer from './dues/duesReducer';

const rootReducer = combineReducers({
  userAuth: usersReducer,
  dues: duesReducer,
});

export default rootReducer;
