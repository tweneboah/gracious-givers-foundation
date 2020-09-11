import React from 'react';
import moment from 'moment';
const Duesitem = ({ duesDetails }) => {
  console.log(duesDetails);
  return (
    <div className='list-group'>
      <a href='/' className='list-group-item list-group-item-action'>
        <div className='d-flex w-100 justify-content-between'>
          <h5 className='mb-1'>{duesDetails.title}</h5>
          <small className='text-muted'>
            {moment(duesDetails.createdAt).format('MMM Do YY')}
          </small>
        </div>
        <p className='mb-1'>{duesDetails.description}</p>
        <small className='text-muted'>GHS {duesDetails.amount}</small>
        <p>
          {' '}
          <small className='text-muted'> {duesDetails.user.displayName}</small>
        </p>
      </a>
    </div>
  );
};

export default Duesitem;
