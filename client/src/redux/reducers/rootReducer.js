import { combineReducers } from 'redux';
import usersReducer from './users/usersReducer';
import duesReducer from './dues/duesReducer';
import authReducer from './users/authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  dues: duesReducer,
  users: usersReducer,
});

export default rootReducer;
