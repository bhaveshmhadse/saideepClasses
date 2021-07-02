import React, { useState } from 'react';
import Pic1 from '../Courses/Images/saideepClasses1.jpg';
import Pic2 from '../Courses/Images/saideepClasses2.jpg';
import Student from '../StudentRegistration/Student';

const Intro = () => {
  let [showStudent, setShowStudent] = useState(false);
  let [Content, setContent] = useState('Free Notes');

  return (
    <div
      style={{
        marginTop: '90vh',
        position: 'relative',
        textAlign: 'center',
        width: 'auto',
        height: 'auto',
      }}>
      {showStudent && (
        <div style={{ width: '100vw', height: '110vh', margin: 0, padding: '2rem', display: 'flex', backdropFilter: 'blur(20px)', position: 'fixed', zIndex: 999, top: '0vh' }}>
          <Student content={Content} width='50vw' />
          <button
            className='closeButton'
            onClick={() => {
              setShowStudent(false);
            }}>
            X
          </button>
        </div>
      )}
      <h1 className='courses'>Online Education</h1>
      <div style={{ width: '100vw', height: 'auto', marginTop: '8vh' }}>
        <img className='slide-in-first' src={Pic1} alt='Saideep CLasses pic 1'></img>
        <img className='slide-in-second' src={Pic2} alt='Saideep CLasses pic 2' />
      </div>
      <div className='saideep-intro'>
        <p style={{ marginTop: '-5vh', textAlign: 'justify', padding: '5vw' }}>
          <important>Saideep Classes</important>was established in 1991.We teach students from 8th Standard upto B.Com. With an excellent/qualified teaching staff, we have weekly mock test which are
          benifitial or students.Also among the top 3 student achievers in their respective colleges/school one out of them have studied from Saideep!. In the span of Saideep's Carrerr not a single
          student have failed who has attended our lectures reugularly!.
          <span style={{}}>Join Saideep today and ace your Carrer!!</span>
          <div>
            <button
              onClick={() => {
                setShowStudent(true);
                setContent('Free Notes');
              }}
              style={{
                fontSize: '1rem',
                marginTop: '5vh',
                marginBottom: '5vh',
                padding: '.5rem',
                width: '70vw',
                borderRadius: '.5rem',
                outline: 'none',
                float: 'center',
                background: '#1fd05d',
                borderColor: 'transparent',
                color: 'white',
                fontWeight: '900',
                filter: 'drop-shadow(10px 15px 10px rgb(205, 205, 205))',
              }}>
              {Content}
            </button>
          </div>
        </p>
      </div>
    </div>
  );
};

export default Intro;
