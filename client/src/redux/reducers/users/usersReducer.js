import {
  FETCH_ALL_USERS,
  FETCH_CURRENT_USER,
  REGISTER_USER,
  LOGOUT_USER,
  LOGIN_USER,
} from '../../actions/actionTypes';

const usersReducer = (state = { currentUser: false, allUsers: [] }, action) => {
  switch (action.type) {
    case LOGIN_USER:
    case REGISTER_USER:
    case FETCH_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case FETCH_ALL_USERS:
      return {
        ...state,
        allUsers: action.payload,
      };
    case LOGOUT_USER:
      return { ...state, currentUser: false };
    default:
      return state;
  }
};

export default usersReducer;
