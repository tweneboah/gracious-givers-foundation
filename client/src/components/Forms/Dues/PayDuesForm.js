import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Select from 'react-select';
import { payDues } from '../../../redux/actions/dues/duesActions';
import { fetchAllUsers } from '../../../redux/actions/users/usersActions';

const PayDuesForm = props => {
  const store = useSelector(data => {
    return data.userAuth;
  });
  const onlyOptions =
    store.allUsers &&
    store.allUsers.map(user => {
      return { value: user._id, label: user.displayName };
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
    props.history.push('/dues');
  };

  return (
    <div className=' container-fluid  bg-warning'>
      <div className='row justify-content-center align-items-center vh-100'>
        <div className='col-lg-5 '>
          <div>
            <h2 className='text-center mb-4'>Dues Payment</h2>
          </div>
          <form onSubmit={onSubmitData}>
            <div>
              <select
                name='title'
                onChange={e => setTitle(e.target.value)}
                class='form-select form-select-lg mb-3'
                aria-label='.form-select-lg example'>
                <option selected>Donation Type</option>
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
                className=' form-control'
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
