import React, { useState } from 'react';

import URLL from '../URL';
import axios from 'axios';

const Help = () => {
  const [enquiry, setEnquiry] = useState('');
  const [Null, setNull] = useState('');

  const handleEnquirySubmit = () => {
    if (enquiry) {
      setNull('');

      axios.post(URLL + '/enquiry', {
        enquiry: enquiry,
      });
      alert('Succesfully Submitted your Enquiry!');
      return;
    }
    alert('Please fill Enquiry section!');
  };

  const handleEnquiry = e => {
    e.preventDefault();
    setEnquiry(e.target.value);
    setNull(e.target.value);
  };

  return (
    <div className='form' style={{ width: '60vw', height: 'auto', padding: '1.2rem' }}>
      <p style={{ fontSize: '3.4vh', padding: '1rem', textAlign: 'left' }}>Submit Your Queries Here and we will get back to you soon :</p>
      <input
        value={Null}
        type='text'
        onChange={handleEnquiry}
        placeholder=''
        style={{ float: 'center', borderRadius: '.5rem', borderColor: 'gold', margin: '1rem', height: '15vh', width: '90%', borderWidth: '1px' }}></input>
      <button style={{ width: '60%' }} className='green-button' onClick={handleEnquirySubmit}>
        Submit
      </button>
    </div>
  );
};

export default Help;
