import React from 'react';

import './index.css';

const DDM = ({ name, role, intro, image, whatsapp }) => {
  return (
    <div className='card' style={{ textAlign: 'center' }}>
      <h1 className='ownername'>{name}</h1>
      <h3 className='experience'>{role}</h3>
      <img alt='Image' style={{ width: '55vw', textAlign: 'center', borderRadius: '50rem', boxShadow: '0 4px 8px grey' }} src={image}></img>

      <a href='https://www.whatsapp.com/+9136298868'>
        <img style={{ cursor: 'pointer', width: '3vh', borderRadius: '.4rem', boxShadow: '0 2px 8px grey' }} src={whatsapp}></img>
      </a>
      <p className='info container'>{intro}</p>
    </div>
  );
};

export default DDM;
