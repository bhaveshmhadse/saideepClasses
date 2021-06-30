import React, { useState } from 'react';
import './mainFont.css';
import Help from './components/Help/Help';
import AuthCode from './components/Authentication/AuthCode';
import Owners from './components/Creators/Owners';
import Course from './components/Courses/Course';
import Student from './components/StudentRegistration/Student';
import NavBar from './components/NavBar/NavBar';
import Intro from './components/Intro/Introduction';
import Footer from './components/Footer/footer';
import NotFound from './components/NotFound';
import StudentReg from './components/StudentRegistration/studentregisteration';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from './components/Contact/Contact';
import { useEffect } from 'react';

const App = () => {
  let [showStudent, setShowStudent] = useState(false);

  const makeStudentVisible = () => {
    setShowStudent(true);
  };

  useEffect(() => {
    setTimeout(makeStudentVisible, 2500);
  }, []);
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path='/'>
            {showStudent && (
              <div style={{ width: '100vw', height: '110vh', margin: 0, padding: '2rem', display: 'flex', backdropFilter: 'blur(20px)', position: 'fixed', zIndex: 999, top: '0vh' }}>
                <Student display='block' />
                <button
                  className='closeButton'
                  onClick={() => {
                    setShowStudent(false);
                  }}>
                  X
                </button>
              </div>
            )}
            <p style={{ marginTop: '-80vh', width: 'auto' }}></p>
            <Intro />
            <StudentReg />
            <Course />
            <Footer />
          </Route>
          <Route path='/Auth' component={AuthCode} />
          <Route path='/Contact' component={Contact} />
          <Route path='/Owners' component={Owners} />
          <Route path='/Enquire' component={Help} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
