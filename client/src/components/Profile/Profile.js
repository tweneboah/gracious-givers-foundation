import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from '../../redux/actions/users/usersActions';

const Profile = props => {
  // const dispatch = useDispatch();
  const user = useSelector(store => {
    return store.userAuth;
  });
  const renderTable = () => {
    return user.currentUser && user.currentUser.userDues.length > 0
      ? user.currentUser.userDues.map(userdue => {
          return (
            <tr>
              <td>{userdue.title}</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          );
        })
      : '';
  };

  // useEffect(() => {
  //   dispatch(fetchCurrentUser());
  // }, [dispatch]);

  //Check if user has no any donation paid

  return (
    <div>
      {/* Detials */}

      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div class='card text-center'>
              <div class='card-header'>Featured</div>
              <div class='card-body'>
                <h5 class='card-title'>Special title treatment</h5>
                <p class='card-text'>
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href='#' class='btn btn-primary'>
                  Go somewhere
                </a>
              </div>
              <div class='card-footer text-muted'>2 days ago</div>
            </div>
          </div>
        </div>
      </div>
      {/* End of details */}

      {/* Total donations */}

      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='card'>
              <div className='card-header'>Featured</div>
              <div className='card-body'>
                <h5 className='card-title'>Special title treatment</h5>
                <p className='card-text'>
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href='/' class='btn btn-primary'>
                  Go somewhere
                </a>
              </div>
            </div>
          </div>

          <div className='col'>
            <div className='card'>
              <div className='card-header'>Featured</div>
              <div className='card-body'>
                <h5 className='card-title'>Special title treatment</h5>
                <p className='card-text'>
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href='/' class='btn btn-primary'>
                  Go somewhere
                </a>
              </div>
            </div>
          </div>

          <div className='col'>
            <div class='card  bg-success text-center'>
              <div class='card-header'>Featured</div>
              <div class='card-body  bg-info'>
                <h5 class='card-title mb-3'>Special title treatment</h5>
                <p class='card-text'>
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href='#' class='btn btn-primary'>
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* End Total donations */}

      {user.currentUser && user.currentUser.userDues.length <= 0 ? (
        <h1 className='text-center text-danger'>You have no dues paid yet</h1>
      ) : (
        <table class='table  table-dark table-striped'>
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
