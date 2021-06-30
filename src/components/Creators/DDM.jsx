import React from 'react';

import './index.css';

const DDM = ({ name, role, intro, image, whatsapp, whatsappLink }) => {
  return (
    <div className='card' style={{ textAlign: 'center' }}>
      <h1 className='ownername'>{name}</h1>
      <h1 className='experience'>
        <important className='experience'>{role}</important>
      </h1>
      <img alt='img' className='profile' src={image}></img>
      <a href={whatsappLink}>
        <img alt='whatsapp' style={{ cursor: 'pointer', width: '4vh', borderRadius: '4rem', boxShadow: '0 2px 8px grey' }} src={whatsapp}></img>
      </a>
      <p className='info container'>{intro}</p>
    </div>
  );
};

export default DDM;
