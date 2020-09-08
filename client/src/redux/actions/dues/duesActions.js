import axios from 'axios';
import { PAY_DUES } from '../actionTypes';

export const payDues = duesData => {
  return async dispatch => {
    const res = await axios.post('/api/dues', duesData);
    dispatch({
      type: PAY_DUES,
      payload: res.data,
    });
  };
};
