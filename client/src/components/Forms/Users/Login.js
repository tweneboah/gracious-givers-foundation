import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loiginUser } from '../../../redux/actions/users/usersActions';

const Login = () => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');

  const formData = { username, password };
  //Dispatch action
  const dispatch = useDispatch();

  //HandleSubmit
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loiginUser(formData));
  };
  return (
    <div className='login_container'>
      <div className='container'>
        <div className='row login_container justify-content-center align-items-center'>
          <div className='col-lg-5 '>
            <div>
              <div className='mb-5'>
                <h1>Login to your account</h1>
              </div>
              <form onSubmit={handleSubmit}>
                <div className='mb-4'>
                  <input
                    className='form-control'
                    type='text'
                    placeholder='Username'
                    value={username}
                    onChange={e => setusername(e.target.value)}
                  />
                </div>
                <div className='mb-4'>
                  <input
                    className='form-control'
                    type='text'
                    placeholder='password'
                    value={password}
                    onChange={e => setpassword(e.target.value)}
                  />
                </div>
                <div className='text-center'>
                  <button className='btn btn-info btn-lg' type='submit'>
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
