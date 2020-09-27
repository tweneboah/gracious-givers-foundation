import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from '../../redux/actions/users/usersActions';
import { Link } from 'react-router-dom';
import PrivateNavbar from './Private/PrivateNavbar';
import PublicNavbar from './Public/PublicNavbar';

const Navbar = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  const userData = useSelector(store => {
    return store.users;
  });

  console.log(userData.currentUser);

  return (
    <Fragment>
      {userData && userData.currentUser ? <PrivateNavbar /> : <PublicNavbar />}
    </Fragment>
  );
};

export default Navbar;
