import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDues } from '../../redux/actions/dues/duesActions';
import Duesitem from './Duesitem';

const DuesList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDues());
  }, [dispatch]);
  const duesData = useSelector(data => {
    return {
      userDues: data.dues,
      user: data.userAuth.currentUser,
    };
  });

  return (
    <Fragment>
      {duesData.userDues.length < 0 ? (
        <h1>Loading</h1>
      ) : (
        duesData.userDues.map(due => {
          return (
            <Duesitem key={due._id} duesDetails={due} user={duesData.user} />
          );
        })
      )}
    </Fragment>
  );
};

export default DuesList;
