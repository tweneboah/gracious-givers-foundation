import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProfile } from '../../redux/actions/users/usersActions';

const Profile = props => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);
  const user = useSelector(store => {
    return store.users;
  });
  console.log(user.profile.userDues);
  const renderTable = () => {
    return user.profile.userDues && user.profile.userDues.length > 0
      ? user.profile.userDues.map(userdue => {
          return (
            <tr>
              <td>{userdue.title}</td>
              <td>{userdue.description}</td>
              <td>{userdue.amount}</td>
            </tr>
          );
        })
      : '';
  };

  return (
    <div>
      {/* Detials */}

      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='card text-center'>
              <div className='card-header'>
                {user.profile.user && user.profile.user.username}
              </div>
              <div className='card-body'>
                <h5 className='card-title'>{`Welcome ${
                  user.profile.user && user.profile.user.username
                } to your dashboard`}</h5>
                <p className='card-text'>Total Donations made so far</p>
                <h1 className='btn btn-primary'>Go somewhere</h1>
              </div>
              <div className='card-footer text-muted bg-danger'>2 days ago</div>
            </div>
          </div>
        </div>
      </div>
      {/* End of details */}

      {user.currentUser && user.currentUser.userDues.length <= 0 ? (
        <h1 className='text-center text-danger'>You have no dues paid yet</h1>
      ) : (
        <table className='table  table-dark table-striped'>
          <thead>
            <tr>
              <th scope='col'>Donation Type</th>
              <th scope='col'>Amount</th>
              <th scope='col'>Date</th>
            </tr>
          </thead>
          <tbody>{renderTable()}</tbody>
        </table>
      )}
    </div>
  );
};

export default Profile;
