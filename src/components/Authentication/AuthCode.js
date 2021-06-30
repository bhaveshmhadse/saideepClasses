import React, { useState } from 'react';
import Credential from './Credential';
import './Auth.css';

const AuthCode = () => {
  const AUTHENTICATION_CODE = 'Saideep_1991';
  const [code, changeCode] = useState('');
  const [showCred, changeshowCred] = useState(false);

  const handleChange = e => {
    e.preventDefault();
    changeCode(e.target.value);
  };

  const submit = () => {
    if (code === AUTHENTICATION_CODE) {
      changeshowCred(true);
      return;
    }
    alert('Please Enter Secret Code!');
  };

  return (
    <>
      {showCred && <Credential />}
      <div className='form' style={{ fontSize: '3vh' }}>
        CODE :
        <input type='password' placeholder='Authentication Code' onChange={handleChange} className='input1' />
        <div>
          <button style={{ width: '50%' }} className='green-button' onClick={submit}>
            Verify
          </button>
        </div>
      </div>
    </>
  );
};

export default AuthCode;
