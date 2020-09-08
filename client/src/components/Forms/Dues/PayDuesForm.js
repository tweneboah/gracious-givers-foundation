import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { payDues } from '../../../redux/actions/dues/duesActions';

const PayDuesForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const onSubmitData = e => {
    e.preventDefault();
    const data = { title, description };
    dispatch(payDues(data));
  };
  return (
    <div>
      <form className='row g-3' onSubmit={onSubmitData}>
        <div className='col-auto'>
          <input
            onChange={e => setTitle(e.target.value)}
            type='text'
            className='form-control'
            id='inputPassword2'
            placeholder='title'
            value={title}
          />
        </div>
        <div className='col-auto'>
          <label htmlFor='inputPassword2' className='sr-only'>
            Description
          </label>
          <input
            onChange={e => setDescription(e.target.value)}
            value={description}
            type='text'
            className='form-control'
            id='inputPassword2'
            placeholder='Description'
          />
        </div>
        <div className='col-auto'>
          <button type='submit' className='btn btn-primary mb-3'>
            Pay Dues
          </button>
        </div>
      </form>
    </div>
  );
};

export default PayDuesForm;
