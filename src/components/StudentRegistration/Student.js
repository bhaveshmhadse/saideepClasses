import React from 'react';

import { useState } from 'react';
import Close from '../Courses/Images/close.png';

import axios from 'axios';

import URLL from '../URL';
import { useEffect } from 'react';

const Student = props => {
  let [email, setemail] = useState('');
  let [number, setnumber] = useState('');
  let [name, setname] = useState('');

  let [show, setShow] = useState('none');

  useEffect(() => {
    setShow(props.display);
  });

  const handlePassword = e => {
    e.preventDefault();
    setnumber(e.target.value);
  };

  const downloadFile = () => {
    const element = document.createElement('a');
    element.href = 'ss.txt';
    element.download = 'ss.txt';
    element.click();
  };

  const handleEmail = e => {
    e.preventDefault();
    setemail(e.target.value);
  };

  const handleNumber = e => {
    e.preventDefault();
    setnumber(e.target.value);
  };

  const handleName = e => {
    e.preventDefault();
    setname(e.target.value);
  };

  const checkAndPostStudent = async () => {
    const validCredentials = email && number && name;

    if (validCredentials) {
      downloadFile();
      let Person = {
        email: email,
        name: name,
        number: number,
      };
      let data = await await axios.post(URLL + '/students', Person);
      console.log(data);
    } else {
      alert('Please fill all the fields!!');
    }
  };
  return (
    <div
      style={{
        display: `${show}`,
        gridTemplateColumns: '1fr',
        padding: '1rem',
        background: 'white',
        position: 'fixed',
        width: '80vw',
        height: 'auto',
        top: '40vh',
        left: '5vw',
        borderRadius: '.6rem',
        boxShadow: '0 4px 8px grey',
      }}
      className='upper'
    >
      <div
        style={{
          opacity: 0,
        }}
      >
        <button
          style={{
            //   position: 'fixed',
            //   top: '35vh',
            //   left: '80vw',
            //   zIndex: '200',
            textAlign: 'left',
            float: 'right',
            fontSize: '1rem',
            padding: '.2rem',
            width: '10vw',
            margin: 'auto',
            borderRadius: '.4rem',
            outline: 'none',
            color: 'black',
            fontWeight: '800',
            boxShadow: '0 4px 10px grey',
            borderColor: 'transparent',
          }}
        >
          <img src={Close}></img>
        </button>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          width: '70vw',
          textAlign: 'left',
        }}
      >
        <h2
          style={{
            textAlign: 'left',
            width: '30vw',
            fontSize: '1.5rem',
            marginTop: '-1vh',
          }}
        >
          Email :
        </h2>
        <input placeholder='Enter your Email ' type='email' className='input1' onChange={handleEmail} style={{ marginTop: '2vh', color: 'black' }} />
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          width: '70vw',
          textAlign: 'left',
        }}
      >
        <h2
          style={{
            textAlign: 'left',
            width: '30vw',
            fontSize: '1.5rem',
            marginTop: '-1vh',
          }}
        >
          Name :
        </h2>
        <input placeholder='Your Name' type='text' className='input1' onChange={handleName} style={{ marginTop: '2vh', color: 'black' }} />
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          width: '70vw',
          textAlign: 'left',
        }}
      >
        <h2
          style={{
            textAlign: 'left',
            width: '30vw',
            fontSize: '1.5rem',
            marginTop: '-1vh',
          }}
        >
          Contact :
        </h2>
        <input type='number' placeholder='contact no' onChange={handlePassword} className='input1' title='Please fill Your Password' required style={{ marginTop: '2vh', color: 'black' }} />
        {/* <input
            onChange={handleNumber}
            // className='input1'
            style={{ marginTop: '1rem', color: 'black' }}
            type='text'
          /> */}
      </div>

      <button
        onClick={checkAndPostStudent}
        style={{
          fontSize: '1rem',
          marginTop: '2rem',
          padding: '.5rem',
          width: '60vw',
          borderRadius: '10rem',
          outline: 'none',
          borderColor: 'green',
          background: 'rgb(0, 225, 44)',
          borderColor: 'transparent',
          color: 'white',
          fontWeight: '800',
          boxShadow: '0 4px 8px grey',
        }}
      >
        <a>Get Free Ebook!</a>
      </button>
    </div>
  );
};

export default Student;
