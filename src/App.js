import React from 'react';
import './mainFont.css';
import Help from './components/Help/Help';
import AuthCode from './components/Authentication/AuthCode';
import Owners from './components/Creators/Owners';
import Course from './components/Courses/Course';
import NavBar from './components/NavBar/NavBar';
import Intro from './components/Intro/Introduction';
import Footer from './components/Footer/footer';
import StudentReg from './components/StudentRegistration/studentregisteration';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path='/saideepClasses'>
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
        </Switch>
      </div>
    </Router>
  );
};

export default App;
