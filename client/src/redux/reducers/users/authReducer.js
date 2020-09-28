import { FETCH_CURRENT_USER, LOGIN_USER } from '../../actions/actionTypes';

const users = {
  isAuthenticated: false,
};

const authReducer = (state = users, action) => {
  switch (action.type) {
    case LOGIN_USER:
    case FETCH_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
