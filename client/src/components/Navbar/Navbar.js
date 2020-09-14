import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from '../../redux/actions/users/usersActions';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  const userData = useSelector(storeData => {
    return storeData.userAuth;
  });

  const renderAuthNav = () => {
    if (userData.currentUser.user) {
      return (
        <Fragment>
          <li className='nav-item'>
            <a className='nav-link' href='/'>
              Staff
            </a>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/profile'>
              My Account
            </Link>
          </li>
          {userData.currentUser.user.isAdmin && (
            <li className='nav-item'>
              <Link className='nav-link' to='/pay-dues'>
                Pay Dues
              </Link>
            </li>
          )}
        </Fragment>
      );
    } else return;
  };

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary pl-5'>
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
          <li className='nav-item active'>
            <a className='nav-link' href='/'>
              Home <span className='sr-only'>(current)</span>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/'>
              Upcoming Event
            </a>
          </li>
          <li className='nav-item dropdown'>
            <a
              className='nav-link dropdown-toggle'
              href='/'
              id='navbarDropdown'
              role='button'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'>
              About Us
            </a>
            <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
              <a className='dropdown-item' href='/'>
                Mission
              </a>
              <a className='dropdown-item' href='/'>
                Vision
              </a>

              <a className='dropdown-item' href='/'>
                Message from the C.E.O
              </a>
            </div>
          </li>

          <Link to='/dues' className='nav-item'>
            <a className='nav-link' href='/'>
              Dues
            </a>
          </Link>
          {renderAuthNav()}
          <li className='nav-item'>
            <a className='nav-link' href='/'>
              Upcoming Event
            </a>
          </li>

          <li className='nav-item'>
            <a className='nav-link' href='/'>
              Contact
            </a>
          </li>
        </ul>

        {userData.currentUser.user ? (
          <img
            className='img-fluid my-2 mr-5 my-sm-0 avatar'
            src={`${userData.currentUser.user.photo}`}
            alt='avatar'
          />
        ) : (
          ''
        )}
        {!userData.currentUser.user ? (
          <Fragment>
            <a href='/auth/google'>
              <button
                className='btn btn-outline-warning my-2 mr-5 my-sm-0'
                type='submit'>
                login with Google
              </button>
            </a>
          </Fragment>
        ) : (
          <Fragment>
            <a href='/api/logout'>
              <button
                className='btn btn-danger my-2 mr-5 my-sm-0'
                type='submit'>
                {' '}
                logout{' '}
              </button>
            </a>
          </Fragment>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
