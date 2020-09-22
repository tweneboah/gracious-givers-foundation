import axios from 'axios';
import { PAY_DUES, FETCH_DUES } from '../actionTypes';

export const payDues = duesData => {
  return async dispatch => {
    await axios.post('/api/dues', duesData);
    dispatch({
      type: PAY_DUES,
    });
  };
};

export const fetchDues = () => {
  return async dispatch => {
    const res = await axios.get('/api/dues');
    dispatch({
      type: FETCH_DUES,
      payload: res.data,
    });
  };
};
