import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Moment from 'react-moment';

import { fetchAllUsers } from '../../redux/actions/users/usersActions';
const Members = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const users = useSelector(store => {
    return store.users;
  });

  console.log(users.users);
  return (
    <div className='mt-5'>
      <h1 className='text-center'>All Members - {users.users.length}</h1>
      <table className='table'>
        <thead className='thead-dark'>
          <tr className='text-center'>
            <th scope='col'>Name</th>
            <th scope='col'>Email</th>
            <th scope='col'>Date Joined</th>
          </tr>
        </thead>
        <tbody>
          {users && users.users.length > 0
            ? users.users.map(user => {
                return (
                  <tr key={user._id} className='text-center'>
                    <td>{user.username}</td>
                    <td>Email here</td>
                    <td>
                      <Moment fromNow>{user.createdAt}</Moment>
                    </td>
                  </tr>
                );
              })
            : 'j'}
        </tbody>
      </table>
    </div>
  );
};

export default Members;
