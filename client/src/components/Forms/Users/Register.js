import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../redux/actions/users/usersActions';

const Register = () => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');

  const formData = { username, password };
  //Dispatch action
  const dispatch = useDispatch();

  //HandleSubmit
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(registerUser(formData));
  };
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Username'
          value={username}
          onChange={e => setusername(e.target.value)}
        />
        <input
          type='text'
          placeholder='password'
          value={password}
          onChange={e => setpassword(e.target.value)}
        />
        <button type='submit'>Register</button>
      </form>
    </div>
  );
};

export default Register;