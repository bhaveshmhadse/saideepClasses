import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Cred from './Credential';
import './Auth.css';

const AuthCode = () => {
  const AUTHENTICATION_CODE = 'Saideep_1991';
  const [code, changeCode] = useState('');

  const handleChange = e => {
    e.preventDefault();
    changeCode(e.target.value);
  };

  const submit = () => {
    if (!(code === AUTHENTICATION_CODE)) alert('Please Enter Valid Credential!!');
  };

  const check = () => {
    return code === AUTHENTICATION_CODE;
  };
  return (
    <Router>
      <Route exact path='/Auth/Cred' component={Cred}></Route>
      <div className='form'>
        CODE :
        <input type='password' placeholder='Authentication Code' onChange={handleChange} className='input' />
        <div>
          <button className='submit' onClick={submit}>
            <Link to={check() ? '/Auth/Cred' : '/Auth'} className='td'>
              Verify
            </Link>
          </button>
        </div>
      </div>
    </Router>
  );
};

export default AuthCode;
