import {
  FETCH_ALL_USERS,
  FETCH_CURRENT_USER,
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER,
} from '../actionTypes';
import axios from 'axios';

export const fetchCurrentUser = () => {
  return async dispatch => {
    const res = await axios('/api/current-user');
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

export const registerUser = userData => {
  return async dispatch => {
    const res = await axios.post('/api/register', userData);
    dispatch({
      type: REGISTER_USER,
      payload: res.data,
    });
  };
};

export const loiginUser = formData => {
  return async dispatch => {
    const res = await axios.post('/api/login', formData);
    dispatch({
      type: LOGIN_USER,
      payload: res.data,
    });
  };
};

export const logoutUser = () => {
  return async dispatch => {
    await axios.post('/api/logout');
    dispatch({
      type: LOGOUT_USER,
      payload: 'Successfully Logout',
    });
  };
};
