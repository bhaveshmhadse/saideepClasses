import React from 'react';
import Pic1 from '../Courses/Images/saideepClasses1.jpg';
import Pic2 from '../Courses/Images/saideepClasses2.jpg';

const Intro = () => {
  return (
    <div
      style={{
        marginTop: '90vh',
        position: 'relative',
        textAlign: 'center',
        width: 'auto',
        height: 'auto',
      }}>
      <h1 style={{ borderRadius: '.3rem' }} className='courses'>
        Online Education
      </h1>

      <div style={{ width: '100vw', height: 'auto', marginTop: '8vh' }}>
        <img className='slide-in-first' src={Pic1} alt='Saideep CLasses pic 1'></img>
        <img className='slide-in-second' src={Pic2} alt='Saideep CLasses pic 2' />
      </div>
      <div className='saideep-intro'>
        <p style={{ marginTop: '-5vh', textAlign: 'justify', padding: '2vh' }}>
          <important>Saideep Clasees</important> sfkjdfjlf sklbdfklb dlkbfskdb l kbskf. dkfgdfkgdfd dfdhfhiods ls osifgsdfgd difgdfkgdskhdb georlrogjglhljh lgfdfg oit iogli d ioirteiyg gi ytreoigiy
          vtoy g sdksbs a kj s lshdslkdb lkh a lkbha k blk dbadlkab alkd alagdadklagd a gla d
        </p>
      </div>
    </div>
  );
};

export default Intro;
