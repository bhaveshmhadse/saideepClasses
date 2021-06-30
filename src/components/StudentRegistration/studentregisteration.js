import React from 'react';
import Student from './Student';
import OnlineStudy from '../Courses/Images/onlineeducation.jpg';
import GuySittingOnBooks from '../Courses/Images/mansittingonbooks.jpg';
import './borderLeftYellow.css';
import { useState } from 'react';
const StudentReg = () => {
  let [display, setDisplay] = useState('none');
  let [close, setclose] = useState(false);

  return (
    <div>
      {close && (
        <div style={{ width: '100vw', height: '110vh', margin: 0, padding: '2rem', display: 'flex', backdropFilter: 'blur(10px)', position: 'fixed', zIndex: 999, top: '0vh' }}>
          <button
            className='closeButton'
            onClick={() => {
              setDisplay('none');
              setclose(false);
            }}>
            X
          </button>
        </div>
      )}
      <h1 style={{ borderRadius: '.3rem' }} className='courses'>
        Online Faculty
      </h1>
      <div style={{ width: 'auto', height: 'auto', marginTop: '10vh' }}>
        <img className='slide-in-first' style={{ border: '0.001px solid lightgrey' }} src={OnlineStudy} alt='Teaching' />
        <img className='slide-in-second' style={{ border: '0.001px solid lightgrey' }} src={GuySittingOnBooks} alt='Man Sitting' />
      </div>
      <div style={{ textAlign: 'center', marginTop: '4vh' }}>
        <p style={{ marginTop: '-5vh', textAlign: 'justify', padding: '2vh' }}>
          Due to Rising <important>Covid</important> situation we have been taking lectures through Online medium. There is an Excellent Faculty by us to educate Students.
          <p
            className='left'
            style={{
              width: 'auto',
              marginTop: '5vh',
              textAlign: 'left',
              fontSize: '1.5rem',
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
            <li style={{ textAlign: 'left', marginBottom: '.6rem' }} className='right'>
              Regular Online Lectures
            </li>
            <li style={{ textAlign: 'left', marginBottom: '.6rem' }} className='right'>
              24/7 Students Doubt Solving
            </li>
            <li style={{ textAlign: 'left', marginBottom: '.6rem' }} className='right'>
              Weekly Mock Test/Exams
            </li>
            <li style={{ textAlign: 'left', marginBottom: '.6rem' }} className='right'>
              Study Material Notes Provided
            </li>
          </ul>
          <div>
            <button
              onClick={() => {
                setclose(true);
                setDisplay('grid');
              }}
              style={{
                fontSize: '1rem',
                marginTop: '5vh',
                marginBottom: '5vh',
                padding: '.5rem',
                width: '70vw',
                borderRadius: '.5rem',
                outline: 'none',
                float: 'center',
                background: '#1fd05d',
                borderColor: 'transparent',
                color: 'white',
                fontWeight: '900',
                filter: 'drop-shadow(10px 15px 10px rgb(205, 205, 205))',
              }}>
              Get Free Notes!
            </button>
          </div>
        </p>
      </div>
      <Student display={display} />
    </div>
  );
};

export default StudentReg;
