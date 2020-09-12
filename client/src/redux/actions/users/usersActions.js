import { FETCH_CURRENT_USER } from '../actionTypes';
import axios from 'axios';

export const fetchCurrentUser = () => {
  return async dispatch => {
    const res = await axios('/api/profile');
    dispatch({
      type: FETCH_CURRENT_USER,
      payload: res.data,
    });
  };
};
