import React from 'react';
import Student from './Student';
import OnlineStudy from '../Courses/Images/onlineeducation.jpg';
import GuySittingOnBooks from '../Courses/Images/mansittingonbooks.jpg';
import './borderLeftYellow.css';
import { useState } from 'react';
const StudentReg = () => {
  let [showStudent, setShowStudent] = useState(false);
  let [close, setclose] = useState(false);

  return (
    <div>
      {close && (
        <div style={{ width: '100vw', height: '110vh', margin: 0, padding: '2rem', display: 'flex', backdropFilter: 'blur(10px)', position: 'fixed', zIndex: 999, top: '0vh' }}>
          <button
            className='closeButton'
            onClick={() => {
              setclose(false);
            }}>
            X
          </button>
        </div>
      )}
      <h1 style={{ marginTop: '-3vh', marginBottom: '-5vh', borderRadius: '.3rem' }} className='courses'>
        Online Faculty
      </h1>
      <div style={{ width: 'auto', height: 'auto', marginTop: '10vh' }}>
        <img loading='lazy' className='slide-in-first' style={{ border: '0.001px solid lightgrey' }} src={OnlineStudy} alt='Teaching' />
        <img loading='lazy' className='slide-in-second' style={{ border: '0.001px solid lightgrey' }} src={GuySittingOnBooks} alt='Man Sitting' />
      </div>
      <div style={{ textAlign: 'center', marginTop: '4vh' }}>
        <p style={{ marginTop: '-5vh', textAlign: 'justify', padding: '2vh' }}>
          Due to Rising <important>Covid</important> situation we have been taking lectures through Online medium. There is an Excellent Faculty by us to educate Students.
          <p
            className='courses'
            style={{
              width: 'auto',
              height: '2vh',
              marginTop: '5vh',
              textAlign: 'left',
              borderLeftWidth: '1vw',
              fontSize: '5vw',
              paddingLeft: '1rem',
            }}>
            Benifits:
          </p>
          <ul
            style={{
              marginTop: '4vh',
              textAlign: 'left',
              textDecoration: 'none',
              listStyle: 'outside',
            }}>
            <li style={{ textAlign: 'left', marginBottom: '.6rem', borderRightWidth: '.6vw' }} className='right'>
              Regular Online Lectures
            </li>
            <li style={{ textAlign: 'left', marginBottom: '.6rem', borderRightWidth: '.6vw' }} className='right'>
              24/7 Students Doubt Solving
            </li>
            <li style={{ textAlign: 'left', marginBottom: '.6rem', borderRightWidth: '.6vw' }} className='right'>
              Weekly Mock Test/Exams
            </li>
            <li style={{ textAlign: 'left', marginBottom: '.6rem', borderRightWidth: '.6vw' }} className='right'>
              Study Material Notes Provided
            </li>
          </ul>
          <div>
            <button
              onClick={() => {
                setShowStudent(true);
              }}
              style={{ width: '50vw' }}
              className='green-button'>
              Enroll
            </button>
          </div>
        </p>
      </div>
      {showStudent && (
        <div style={{ width: '100vw', height: '110vh', margin: 0, padding: '2rem', display: 'flex', backdropFilter: 'blur(20px)', position: 'fixed', zIndex: 999, top: '0vh' }}>
          <Student content='Enroll' />
          <button
            className='closeButton'
            onClick={() => {
              setShowStudent(false);
            }}>
            X
          </button>
        </div>
      )}
    </div>
  );
};

export default StudentReg;
