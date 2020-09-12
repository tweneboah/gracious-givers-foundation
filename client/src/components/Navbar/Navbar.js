import React, { Fragment, useEffect } from 'react';
import PrivateNavbar from './Private/PrivateNavbar';
import PublicNavbar from './Public/PublicNavbar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from '../../redux/actions/users/usersActions';

const Navbar = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  const userData = useSelector(storeData => {
    return storeData.userAuth;
  });

  console.log(userData.user ? userData.user.user : '');

  const renderAuthNav = () => {
    if (userData.user) {
      return (
        <Fragment>
          <li class='nav-item'>
            <a class='nav-link' href='#'>
              Staff
            </a>
          </li>
          <li class='nav-item'>
            <a class='nav-link' href='#'>
              My Account
            </a>
          </li>

          <li class='nav-item'>
            <a class='nav-link' href='#'>
              Members
            </a>
          </li>
        </Fragment>
      );
    } else return;
  };

  return (
    <nav class='navbar navbar-expand-lg navbar-light bg-light pl-5'>
      <a className='' class='navbar-brand' href='#'>
        GGF
      </a>
      <button
        class='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'>
        <span class='navbar-toggler-icon'></span>
      </button>

      <div class='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul class='navbar-nav mr-auto'>
          <li class='nav-item active'>
            <a class='nav-link' href='#'>
              Home <span class='sr-only'>(current)</span>
            </a>
          </li>
          <li class='nav-item'>
            <a class='nav-link' href='#'>
              Upcoming Event
            </a>
          </li>
          <li class='nav-item dropdown'>
            <a
              class='nav-link dropdown-toggle'
              href='#'
              id='navbarDropdown'
              role='button'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'>
              About Us
            </a>
            <div class='dropdown-menu' aria-labelledby='navbarDropdown'>
              <a class='dropdown-item' href='#'>
                Mission
              </a>
              <a class='dropdown-item' href='#'>
                Vision
              </a>

              <a class='dropdown-item' href='#'>
                Message from the C.E.O
              </a>
            </div>
          </li>

          <li class='nav-item'>
            <a class='nav-link' href='#'>
              Our Impacts
            </a>
          </li>

          {/* <li class='nav-item'>
            <a class='nav-link' href='#'>
              Staff
            </a>
          </li>
          <li class='nav-item'>
            <a class='nav-link' href='#'>
              My Account
            </a>
          </li>

          <li class='nav-item'>
            <a class='nav-link' href='#'>
              Members
            </a>
          </li> */}
          {renderAuthNav()}
          <li class='nav-item'>
            <a class='nav-link' href='#'>
              Upcoming Event
            </a>
          </li>

          <li class='nav-item'>
            <a class='nav-link' href='#'>
              Contact
            </a>
          </li>
        </ul>

        <button class='btn btn-outline-success my-2 mr-5 my-sm-0' type='submit'>
          Login
        </button>
        <button class='btn btn-outline-info my-2 mr-5 my-sm-0' type='submit'>
          Register
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
