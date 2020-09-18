import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Moment from 'react-moment';

import { fetchAllUsers } from '../../redux/actions/users/usersActions';
import ceo from '../../img/ceo.jpg';
const Members = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const users = useSelector(store => {
    return store.userAuth.allUsers;
  });

  console.log(users);
  return (
    <div className='mt-5'>
      <h1 className='text-center'>All Members - {users.length}</h1>
      <table class='table'>
        <thead class='thead-dark'>
          <tr className='text-center'>
            <th scope='col'></th>
            <th scope='col'>Name</th>
            <th scope='col'>Email</th>
            <th scope='col'>Date Joined</th>
          </tr>
        </thead>
        <tbody>
          {users && users.length > 0
            ? users.map(user => {
                return (
                  <tr key={user._id} className='text-center'>
                    <th scope='row'>
                      <img
                        src={user.photo}
                        className='members-avatr img-thumbnail'
                      />
                    </th>
                    <td>{user.displayName}</td>
                    <td>{user.email}</td>
                    <td>
                      <Moment fromNow>{user.createdAt}</Moment>
                    </td>
                  </tr>
                );
              })
            : ''}
        </tbody>
      </table>
    </div>
  );
};

export default Members;
