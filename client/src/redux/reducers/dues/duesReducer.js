import { FETCH_DUES, PAY_DUES } from '../../actions/actionTypes';
const duesReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_DUES:
      return action.payload;
    case PAY_DUES:
      return state;
    default:
      return state;
  }
};

export default duesReducer;
