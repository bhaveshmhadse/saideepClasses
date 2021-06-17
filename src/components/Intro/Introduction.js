import React from 'react';
import Pic1 from "../Courses/Images/saideepClasses1.jpg"
import Pic2 from "../Courses/Images/saideepClasses2.jpg"

const Intro = () => {
  return (
    <div
      style={{
        marginTop: '90vh',
        position: 'relative',
        textAlign: 'center',
        width: 'auto',
        height: 'auto',
      }}
    >
      <h1 style={{ borderRadius: '.3rem' }} className='courses'>
        Online Education
      </h1>

      <div style={{ width: 'auto', height: 'auto', marginTop: '10vh' }}>
        <img
          style={{
            transform: 'translateY(-1vh) translateX(-10vw)',
            width: '60vw',
            borderRadius: '.3rem',
            boxShadow: '0 2px 8px rgb(111, 109, 109)',
          }}
          src={Pic1}
          alt='Saideep CLasses pic 1'
        />
        <img
          style={{
            transform: 'translateY(-10vh) translateX(10vw)',
            width: '55vw',
            borderRadius: '.3rem',
            boxShadow: '0 2px 8px rgb(111, 109, 109)',
          }}
          src={Pic2}
          alt='Saideep CLasses pic 2'
        />
      </div>
      <div style={{ textAlign: 'center' }}>
        <p style={{ marginTop: '-5vh', textAlign: 'justify', padding: '2vh' }}>
          Saideep Clasees sfkjdfjlf sklbdfklb dlkbfskdb l kbskf. dkfgdfkgdfd
          dfdhfhiods ls osifgsdfgd difgdfkgdskhdb georlrogjglhljh lgfdfg oit
          iogli d ioirteiyg gi ytreoigiy vtoy g sdksbs a kj s lshdslkdb lkh a lkbha k blk dbadlkab alkd alagdadklagd a gla d
        </p>
      </div>
    </div>
  );
};

export default Intro;
