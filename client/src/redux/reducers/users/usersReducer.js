import { FETCH_CURRENT_USER } from '../../actions/actionTypes';

const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_CURRENT_USER:
      return {
        user: action.payload,
      };
    default:
      return state;
  }
};

export default usersReducer;
