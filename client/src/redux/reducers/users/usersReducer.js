import { FETCH_ALL_USERS, FETCH_CURRENT_USER } from '../../actions/actionTypes';

const usersReducer = (state = { currentUser: false, allUsers: [] }, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};

export default usersReducer;
