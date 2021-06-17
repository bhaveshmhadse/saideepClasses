import React from 'react';
import './Batch.css';
// import '../Courses/Images/calculating.png';

const Batch = ({ BatchInfo }) => {
  return (
    <>
      {BatchInfo.map((eachObj, eachobjIdx) => (
        <div className='cont'>
          <img src={eachObj.image} key={eachobjIdx} alt='Image' className='batch-image' />
          <h1 className='batch-name'>{eachObj.subject}</h1>
        </div>
      ))}
    </>
  );
};

export default Batch;
