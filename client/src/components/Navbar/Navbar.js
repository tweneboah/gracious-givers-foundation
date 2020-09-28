import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from '../../redux/actions/users/usersActions';
import PrivateNavbar from './Private/PrivateNavbar';
import PublicNavbar from './Public/PublicNavbar';

const Navbar = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  const userData = useSelector(store => {
    return store.auth;
  });

  return (
    <Fragment>
      {userData && userData.isAuthenticated.user ? (
        <PrivateNavbar userData={userData} />
      ) : (
        <PublicNavbar />
      )}
    </Fragment>
  );
};

export default Navbar;
