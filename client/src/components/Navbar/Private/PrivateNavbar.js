import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../../redux/actions/users/usersActions';

const PrivateNavbar = ({ user }) => {
  const dispatch = useDispatch();
  return (
    <nav className='navbar navbar-expand-lg navbar-danger bg-danger'>
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
            <a className='nav-link' href='/'>
              Volunteers
            </a>
          </li>

          <li className='nav-item'>
            <Link className='nav-link' to='/profile'>
              My Account
            </Link>
          </li>
        </ul>
        <form className='form-inline my-2 my-lg-0'>
          <button
            className='btn btn-outline-success my-2 my-sm-0 mr-3'
            type='submit'>
            Search
          </button>

          <button
            onClick={() => dispatch(logoutUser())}
            className='btn btn-outline-success my-2 my-sm-0 mr-4'
            type='submit'>
            Logout
          </button>
        </form>
      </div>
    </nav>
  );
};

export default PrivateNavbar;
