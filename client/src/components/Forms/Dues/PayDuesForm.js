import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Select from 'react-select';
import { payDues } from '../../../redux/actions/dues/duesActions';
import { fetchAllUsers } from '../../../redux/actions/users/usersActions';

const PayDuesForm = props => {
  const users = useSelector(store => {
    return store.users.users;
  });
  //We only need the id for value and username for lable to be able to use reactSelect
  const onlyOptions =
    users &&
    users.map(user => {
      return { value: user._id, label: user.username };
    });

  const [selectedOption, setSelectedOption] = useState(null);
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const onSubmitData = e => {
    e.preventDefault();
    const data = {
      title,
      description,
      amount,
      user: selectedOption.value,
    };
    dispatch(payDues(data));
  };

  return (
    <div className='container-fluid'>
      <div className='row justify-content-center align-items-center vh-100'>
        <div className='col-lg-5 '>
          <div>
            <h2 className='text-center mb-4'>Pay Dues to User Account</h2>
          </div>
          <form onSubmit={onSubmitData}>
            <div>
              <select
                name='title'
                onChange={e => setTitle(e.target.value)}
                className='form-control  mb-3'
                aria-label='.form-select-lg '>
                <option defaultValue>Donation Type</option>
                <option value='montly-dues'>Monthly Dues</option>
                <option value='free-donations'>Free Donations</option>
                <option value='others'>Others</option>
              </select>
            </div>

            <div className='mb-4'>
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={onlyOptions}
                name='user'
                value={selectedOption}
                placeholder='Select member/payee'
              />
            </div>
            <div className='mb-4'>
              <input
                name='amount'
                onChange={e => setAmount(e.target.value)}
                type='text'
                className='form-control form-control-lg'
                id='inputPassword2'
                placeholder='Amount GHS'
                value={amount}
              />
            </div>
            <div className='col-auto'>
              <label htmlFor='inputPassword2' className='sr-only'>
                Description
              </label>
              <textarea
                rows='4'
                cols='7'
                onChange={e => setDescription(e.target.value)}
                value={description}
                type='text'
                name='description'
                className='form-control'
                id='inputPassword2'
                placeholder='Description'
              />
            </div>
            <div className='col-auto'>
              <button type='submit' className='btn btn-primary btn-block mt-4'>
                Pay Dues
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PayDuesForm;
