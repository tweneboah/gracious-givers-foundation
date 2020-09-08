import React, { Fragment } from 'react';

const PublicNavbar = () => {
  return (
    <Fragment>
      <nav className='navbar navbar-expand-lg navbar-light bg-success'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='/'>
            GGF
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <a className='nav-link active' aria-current='page' href='/'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/auth/google'>
                  Login with Google
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default PublicNavbar;
