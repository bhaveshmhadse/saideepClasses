import React from 'react';
import Data from './Data';
import Batch from './Batches/Subjects';

import './standard.css';

import { useState } from 'react';

const Course = () => {
  let [index, setIndex] = useState(0);
  let [subjectInfo, setsubjectInfo] = useState(Data);
  let [standard, setstandard] = useState({
    0: '8th',
    1: '9th',
    2: '10th',
    3: '11th',
    4: '12th',
    5: 'B-Com',
  });

  return (
    <div style={{ height: 'auto', width: 'auto' }}>
      <h1 className='courses'>Courses</h1>
      <div style={{ width: "auto", height: "auto", color: "darkorange", marginTop: "2vh", textAlign: "left", padding: "1rem", fontWeight: "600", fontSize: "1.3rem", marginBottom: "-5vh" }}>Select Your Course :</div>
      <div
        style={{
          marginTop: '3vh',
          width: 'auto',
          display: 'grid',
          gridGap: '.9vh',
          gridTemplateColumns: '1fr 1fr 1fr 1fr',
        }}
      >
        <div onClick={() => setIndex(0)} className='standard'>
          <h1 className='name'>8th</h1>
        </div>
        <div onClick={() => setIndex(1)} className='standard'>
          <h1 className='name'>9th</h1>
        </div>
        <div onClick={() => setIndex(2)} className='standard'>
          <h1 className='name'>10th</h1>
        </div>
        <div onClick={() => setIndex(3)} className='standard'>
          <h1 className='name'>11th</h1>
        </div>
        <div onClick={() => setIndex(4)} className='standard'>
          <h1 className='name'>12th</h1>
        </div>
        <div style={{ width: 'auto' }} onClick={() => setIndex(5)} className='standard'>
          <h1 className='name'>BCom</h1>
        </div>
      </div>
      <h2
        style={{
          marginTop: '3vh',
          fontSize: '4vh',
          marginBottom: '2vh',
          width: 'auto',
          height: '5vh',
          color: 'darkorange',
        }}
      // className='font'
      >
        {standard[index]}
      </h2>

      <div
        style={{
          marginTop: '1vh',
          display: 'grid',
          height: 'auto',
          marginBottom: '10vh',
          gridTemplateColumns: '1fr 1fr ',
          gridGap: '2vh',
        }}
      >
        <Batch BatchInfo={subjectInfo[index]} />
      </div>
    </div>
  );
};

export default Course;
