import { combineReducers } from 'redux';
import usersReducer from '../reducers/users/usersReducer';

const rootReducer = combineReducers({
  userAuth: usersReducer,
});

export default rootReducer;
