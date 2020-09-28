import React from 'react';
import { Link } from 'react-router-dom';

const PublicNavbar = ({ user }) => {
  return (
    <nav className='navbar navbar-expand-lg navbar-danger bg-warning'>
      <a className='navbar-brand' href='/'>
        GGF
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <a className='nav-link' href='/'>
              About
            </a>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/members'>
              Volunteers
            </Link>
          </li>

          <li className='nav-item'>
            <a className='nav-link' href='/'>
              Donations
            </a>
          </li>

          <li className='nav-item'>
            <a className='nav-link' href='/'>
              Gallery
            </a>
          </li>

          <li className='nav-item'>
            <a className='nav-link' href='/'>
              Upcoming Event
            </a>
          </li>
        </ul>
        <form className='form-inline my-2 my-lg-0'>
          <Link to='/register'>
            <button
              className='btn btn-outline-success my-2 my-sm-0 mr-3'
              type='submit'>
              Register
            </button>
          </Link>
          <Link to='/login'>
            <button
              className='btn btn-outline-success my-2 my-sm-0 mr-4'
              type='submit'>
              Login
            </button>
          </Link>
        </form>
      </div>
    </nav>
  );
};

export default PublicNavbar;
