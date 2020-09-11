import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from '../../redux/actions/users/usersActions';

const Profile = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(store => {
    return store.userAuth;
  });

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  console.log(currentUser.user && currentUser.user.userDues);
  return (
    <div>
      {!currentUser.user ? (
        <h1>Profile loading....</h1>
      ) : (
        <div className='card text-center'>
          <div className='card-header'>{currentUser.user.user.displayName}</div>
          <div className='card-body'>
            <h5 className='card-title'>{currentUser.user.user.email}</h5>
            <p className='card-text'>
              Total amount contributed: {currentUser.user.userDues.length}
            </p>
            <a href='/' className='btn btn-danger'>
              Delete Account
            </a>
          </div>
          <div className='card-footer text-muted'>2 days ago</div>
        </div>
      )}
    </div>
  );
};

export default Profile;
