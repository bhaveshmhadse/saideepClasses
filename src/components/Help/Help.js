import React, { useState } from 'react';

import URLL from '../URL';
import axios from 'axios';

const Help = () => {
  const [enquiry, setEnquiry] = useState("");
  const [Null, setNull] = useState("");

  const handleEnquirySubmit = () => {
    if (enquiry) {
      setNull("");

      axios.post(URLL + "/enquiry", {
        enquiry: enquiry
      })
      alert("enquiry " + enquiry);
      alert("Null " + Null);
      return;
    }
    alert("Please fill Null")
  }

  const handleEnquiry = (e) => {
    e.preventDefault();
    setEnquiry(e.target.value)
    setNull(e.target.value)
  }

  return (
    <div className='form' style={{ width: '60vw', height: "auto", padding: '1.2rem' }}>
      <h3 style={{ padding: '1rem', textAlign: 'left' }}>Submit Your Queris Here and we will get back to you soon :</h3>
      <input value={Null} type='text' onChange={handleEnquiry} placeholder='' style={{ float: 'center', borderRadius: '.5rem', borderColor: 'gold', margin: '1rem', height: '15vh', width: '90%', borderWidth: '1px' }}></input>
      <button style={{ borderColor: "transparent", width: "60%", background: "green", borderRadius: "2rem", boxShadow: "1px 2px 10px grey", color: "white", padding: ".3rem" }} onClick={handleEnquirySubmit}>Submit</button>
    </div>
  );
};

export default Help;
