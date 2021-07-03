import React from 'react';

import { useState } from 'react';
import Close from '../Courses/Images/close.png';

import axios from 'axios';

import URLL from '../URL';

const Student = props => {
  let [email, setemail] = useState('');
  let [number, setnumber] = useState('');
  let [name, setname] = useState('');
  let [info, setInfo] = useState(props.content);

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
      alert(`Thankyou ${name}, your free class is Booked! \nCheck your Gmail`);
    } else {
      alert('Please fill all the fields!!');
    }
  };
  return (
    <div
      style={{
        display: `block`,
        gridTemplateColumns: '1fr',
        padding: '1rem',
        background: 'aliceblue',
        position: 'fixed',
        zIndex: '999',
        width: '80vw',
        height: 'auto',
        top: '30vh',
        left: '5vw',
        borderRadius: '.6rem',
        filter: 'drop-shadow(10px 20px 20px grey)',
      }}
      className='upper'>
      <div
        style={{
          opacity: 0,
        }}>
        <button
          style={{
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
          }}>
          <img alt='closebutton' src={Close}></img>
        </button>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          width: '70vw',
          textAlign: 'left',
        }}>
        <h2
          style={{
            textAlign: 'left',
            width: '30vw',
            fontSize: '5.5vw',
            fontWeight: '800',
            marginTop: '-1vh',
          }}>
          Email :
        </h2>
        <input placeholder='Enter your Email ' type='email' className='input1' onChange={handleEmail} style={{ width: '20vh', marginTop: '2vh' }} />
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          width: '70vw',
          textAlign: 'left',
        }}>
        <h2
          style={{
            textAlign: 'left',
            width: '30vw',
            fontSize: '5.5vw',
            fontWeight: '800',
            marginTop: '-1vh',
          }}>
          Name :
        </h2>
        <input placeholder='Your Name' type='text' className='input1' onChange={handleName} style={{ width: '20vh', marginTop: '2vh' }} />
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          width: '70vw',
          textAlign: 'left',
        }}>
        <h2
          style={{
            textAlign: 'left',
            width: '30vw',
            fontSize: '5.5vw',
            fontWeight: '00',
            marginTop: '-1vh',
          }}>
          Contact :
        </h2>
        <input type='number' placeholder='Contact no' onChange={handlePassword} className='input1' title='Please fill Your Password' required style={{ width: '20vh', marginTop: '2vh' }} />
      </div>

      <button onClick={checkAndPostStudent} style={{ width: '65vw', marginBottom: '4vh' }} className='green-button'>
        <a>{info}</a>
      </button>
    </div>
  );
};

export default Student;
