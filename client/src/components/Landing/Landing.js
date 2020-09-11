import React, { Fragment } from 'react';

const Landing = () => {
  return (
    <div className='banner-height2'>
      <div className='container-fluid'>
        <div className=' row banner-height justify-content-center align-items-center text-center'>
          <div className=' col-lg-4 border shadow-lg rounded bg-danger h-100 d-flex flex-column justify-content-center bg'>
            <div>
              <h1>Support us</h1>
              <form>
                <div className=' mb-3'>
                  <input
                    placeholder='Username'
                    className=' form-control form-control-sm'
                  />
                </div>

                <div className=' mb-3'>
                  <input
                    placeholder='Username'
                    className=' form-control form-control-sm'
                  />
                </div>

                <div>
                  <input
                    placeholder='Username'
                    className=' form-control form-control-sm'
                  />
                </div>

                <div>
                  <input
                    type='submit'
                    value='Register'
                    className='btn btn-block'
                  />
                </div>
              </form>
            </div>
          </div>

          <div className=' col-lg-7 banner-left'>
            <h1 className='text-white'>
              Welcome to Gracious Givers Foundation
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
