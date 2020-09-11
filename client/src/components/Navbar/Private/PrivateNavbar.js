import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const PrivateNavbar = ({ user }) => {
  return (
    <Fragment>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
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
                <Link className='nav-link' to='/pay-dues'>
                  Pay Dues
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/profile'>
                  Profile
                </Link>
              </li>

              <li className='nav-item'>
                <Link className='nav-link' to='/dues'>
                  All Dues
                </Link>
              </li>

              <li className='nav-item'>
                <a className='nav-link' href='/api/logout'>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
        <form className='d-flex'>
          <p className='pr-3 text-warning'>{user ? user.email : ''}</p>
        </form>
      </nav>
    </Fragment>
  );
};

export default PrivateNavbar;
