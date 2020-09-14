import React from 'react';

const LoginPage = () => {
  return (
    <div className=' container '>
      <div className='row  justify-content-center login_page align-items-center'>
        <div className='col-lg-3 border p-5'>
          <form>
            <div className='mb-4'>
              <input
                type='text'
                placeholder='Username'
                className='form-control'
              />
            </div>
            <div className='mb-4'>
              <input
                type='email'
                placeholder='Email'
                className='form-control'
              />
            </div>
            <div className='mb-4'>
              <input
                type='password'
                placeholder='Password'
                className='form-control'
              />
            </div>
            <div>
              <a href='/auth/google'>Login with Google</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
