import React from 'react';
import './footer.css';
const Footer = () => {
  return (
    <div
      style={{
        padding: '1rem',
        width: 'auto',
        background: 'rgb(2, 37, 44)',
        textAlign: 'center',
        height: 'auto',
      }}>
      <h1
        style={{
          marginTop: '1rem',
          fontWeight: '800',
          color: 'white',
          fontSize: '3vh',
          paddingBottom: '1rem',
        }}>
        Address
      </h1>
      <h1
        style={{
          fontWeight: '400',
          color: 'white',
          fontSize: '.7rem',
          paddingBottom: '1rem',
        }}>
        Pandurang Niwas, S.T. Stand Signal, Khopat, Thane (W)
      </h1>

      <h1
        style={{
          marginTop: '1rem',
          fontWeight: '800',
          color: 'white',
          fontSize: '3vh',
          paddingBottom: '1rem',
        }}>
        Feel Free To Contact Us :
      </h1>
      <p
        style={{
          fontSize: '1rem',
          fontWeight: '700',
          paddingRight: '1rem',
          marginRight: '1rem',
          display: 'inline-block',
        }}>
        <a
          style={{
            display: 'inline-block',
            marginLeft: '1rem',
            color: 'grey',
          }}
          href='https://wa.me/+918850430042'>
          8850430042
        </a>
      </p>
      <p
        style={{
          fontSize: '1rem',
          fontWeight: '700',
          paddingRight: '1rem',
          marginRight: '1rem',
          display: 'inline-block',
        }}>
        <a
          style={{
            color: 'grey',
          }}
          href='https://www.wa.me/+918850326407'>
          8850326407
        </a>
      </p>

      <p
        style={{
          marginTop: '3vh',
          fontSize: '1.5rem',
          fontWeight: '900',
          color: 'white',
        }}>
        Copyright - Saideep Classes
      </p>
      <p
        style={{
          fontSize: '.7rem',
          fontWeight: '900',
          color: 'rgb(55, 53, 53)',
          color: 'grey',
        }}>
        - Since 1991
      </p>
      {/* </div> */}
      <p
        style={{
          color: 'white',
          marginTop: '1rem',
          fontSize: '1.vh',

          textAlign: 'right',
        }}>
        Design -&nbsp;
        <a style={{ color: 'yellow', textDecoration: 'none', fontSize: '1.3vh' }} href='https://wa.me/+918850326407'>
          Bhavesh Mhadse
        </a>
      </p>
    </div>
  );
};

export default Footer;
