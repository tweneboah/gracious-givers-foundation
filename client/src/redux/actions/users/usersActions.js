import { FETCH_ALL_USERS, FETCH_CURRENT_USER } from '../actionTypes';
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

export const fetchAllUsers = () => {
  return async dispatch => {
    const res = await axios.get('/api/users');
    dispatch({
      type: FETCH_ALL_USERS,
      payload: res.data,
    });
  };
};
