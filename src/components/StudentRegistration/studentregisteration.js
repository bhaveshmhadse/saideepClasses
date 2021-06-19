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
      {close &&
        (
          <div style={{ width: '100vw', height: '110vh', margin: 0, padding: '2rem', display: 'flex', backdropFilter: 'blur(10px)', position: 'fixed', zIndex: 999, top: '0vh' }}>

            <button
              className="closeButton"
              onClick={() => {
                setDisplay('none');
                setclose(false);
              }}
            >
              X
            </button>
          </div>
        )}
      <h1 style={{ borderRadius: '.3rem' }} className='courses'>
        Online Faculty
      </h1>
      <div style={{ width: 'auto', height: 'auto', marginTop: '10vh' }}>
        <img
          style={{
            transform: 'translateY(-6vh) translateX(-10vw)',
            width: '60vw',
            borderRadius: '.3rem',
            boxShadow: '0 2px 8px rgb(111, 109, 109)',
          }}
          src={OnlineStudy}
          alt=''
        />
        <img
          style={{
            transform: 'translateY(-10vh) translateX(10vw)',
            width: '55vw',
            borderRadius: '.3rem',
            boxShadow: '0 2px 8px rgb(111, 109, 109)',
          }}
          src={GuySittingOnBooks}
          alt='Man Sitting'
        />
      </div>
      <div style={{ textAlign: 'center' }}>
        <p
          style={{
            marginTop: '-5vh',
            textAlign: 'justify',
            padding: '2vh',
          }}
        >
          Due to Rising Covid situation we have been taking lectures through Online medium. There is an Excellent Faculty by us to educate Students.
          <p
            className='left'
            style={{
              width: 'auto',
              marginTop: '5vh',
              textAlign: 'left',
              fontSize: '1.5rem',
              paddingLeft: '1rem',
            }}
          >
            Benifits:
          </p>
          <ul
            style={{
              marginTop: '4vh',
              textAlign: 'left',
              textDecoration: 'none',
              listStyle: 'outside',
            }}
          >
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
                marginTop: '2rem',
                padding: '.5rem',
                width: '60vw',
                borderRadius: '10rem',
                outline: 'none',
                float: 'center',
                background: 'rgb(0, 225, 44)',
                borderColor: 'transparent',
                color: 'white',
                fontWeight: '900',
                boxShadow: '1px 4px 8px grey',
              }}
            >
              Click For Surprise!!
            </button>
          </div>
        </p>
      </div>
      <Student display={display} />
    </div>
  );
};

export default StudentReg;
