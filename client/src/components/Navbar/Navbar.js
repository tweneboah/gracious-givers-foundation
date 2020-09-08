import React, { Fragment, useEffect } from 'react';
import PrivateNavbar from './Private/PrivateNavbar';
import PublicNavbar from './Public/PublicNavbar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from '../../redux/actions/users/usersActions';

const Navbar = () => {
  const user = useSelector(currentUser => {
    return currentUser.userAuth.user;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  const renderNavbar = () => {
    if (user) {
      return <PrivateNavbar user={user} />;
    } else {
      return <PublicNavbar user={user} />;
    }
  };
  return <Fragment>{renderNavbar()}</Fragment>;
};

export default Navbar;
