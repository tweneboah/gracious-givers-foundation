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
    return data.dues;
  });

  return (
    <Fragment>
      {duesData.length < 0 ? (
        <h1>Loading</h1>
      ) : (
        duesData.map(due => {
          return <Duesitem key={due._id} duesDetails={due} />;
        })
      )}
    </Fragment>
  );
};

export default DuesList;
