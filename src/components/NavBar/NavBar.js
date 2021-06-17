import React from 'react';
import Close from '../Courses/Images/close.png';
import Flower from '../Courses/Images/favicon.png';
import HamBurger from '../Courses/Images/hamburger.png';
import Home from '../Courses/Images/home.png';
import Authentication from '../Courses/Images/authentication.png';
import Owners from '../Courses/Images/owners.png';
import Contact from '../Courses/Images/contacts.png';
import Help from '../Courses/Images/inquiry.png';

import { useState } from 'react';

import { Link } from 'react-router-dom';
import './subject.css';

const NavBar = () => {
  let [visibility, setVisibility] = useState('');

  return (
    <div>
      <div
        style={{

          marginTop: '0',
        }}
        className={`normal ${visibility}`}
      >
        <button style={{ borderColor: 'transparent' }} className='sidebarbutton' onClick={() => setVisibility('hide')}>
          <img alt="image" src={Close}></img>
        </button>

        <div
          style={{
            marginBottom: '5vh',
            height: 'auto',
            width: 'inherit',
            position: 'fixed',
            top: '10vh',
          }}
        >
          <h1
            style={{
              paddingTop: '1rem',
              fontSize: '2.3rem',
              color: 'black',
              margin: 'auto',
            }}
          >
            Saideep Classes
          </h1>
          <h2
            style={{
              marginBottom: '5vh',
              fontSize: '1rem',
              color: 'maroon',
              margin: 'auto',
              top: '4vh',
            }}
          >
            28 Years Of Excellence
          </h2>
        </div>
        <ul className='uul'>
          <div>
            <Link className='link' to='/saideepClasses'>
              <img
                alt="image"
                src={Home}
                style={{
                  paddingRight: '1rem',
                  width: '4vh',
                  textAlign: 'left',
                }}
              ></img>
              Home
            </Link>
          </div>
          <div>
            <Link className='link' to='/Auth'>
              <img
                alt="image"
                src={Authentication}
                style={{
                  paddingRight: '1rem',
                  width: '4vh',
                  textAlign: 'left',
                }}
              ></img>
              Authentication
            </Link>
          </div>
          <div>
            <Link className='link' to='/Owners'>
              <img
                alt="image"
                src={Owners}
                style={{
                  paddingRight: '1rem',
                  width: '4vh',
                  textAlign: 'left',
                }}
              ></img>
              Owners
            </Link>
          </div>
          <div>
            <Link className='link' to='/Contact'>
              <img
                alt="image"
                src={Contact}
                style={{
                  paddingRight: '1rem',
                  width: '4vh',
                  textAlign: 'left',
                }}
              ></img>
              Contact
            </Link>
          </div>
          <div>
            <Link className='link' to='/Enquire'>
              <img
                alt="image"
                src={Help}
                style={{
                  paddingRight: '1rem',
                  width: '4vh',
                  textAlign: 'left',
                }}
              ></img>
              Enquire
            </Link>
          </div>
        </ul>
      </div>

      <div
        style={{
          height: '8vh',
          margin: '0',
        }}
        className='navbar'
      >
        <button style={{ borderColor: 'transparent', boxShadow: 'none' }} onClick={() => setVisibility('show')}>
          <img src={HamBurger}></img>
        </button>
        <img alt="image" src={Flower} className='rotate'></img>
        <h1>Saideep Classes</h1>
      </div>
    </div>
  );
};

export default NavBar;
