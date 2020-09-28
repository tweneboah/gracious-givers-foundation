const { FETCH_ALL_USERS, USER_PROFILE } = require('../../actions/actionTypes');

const userData = {
  users: [],
  profile: {},
};

const userReducer = (state = userData, action) => {
  switch (action.type) {
    case FETCH_ALL_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case USER_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
