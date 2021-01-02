import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Bootstrap Components
import { Container } from 'react-bootstrap';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Homepage from './pages/Homepage';
import ClassCalendarPage from './pages/ClassCalendarPage';
import ResourcesPage from './pages/ResourcesPage';
import ContactPage from './pages/ContactPage';
import AboutMePage from './pages/AboutMePage';
import AdminLoginPage from './pages/AdminLoginPage';
import AddResourcePage from './pages/AddResourcePage';
import AddCalenderPage from './pages/AddCalenderPage';
import CheckMessagePage from './pages/CheckMessagePage';

function App() {
  return (
    <Router>
            <div className='star-container' style={{ top:'0', left: '500px' }}> 
        <div className='star'></div>
        <div className='star'></div>
        <div className='star'></div>
        <div className='star'></div>
        <div className='star'></div>
      </div>
      <div className='star-container' style={{ top:'0', right: '500px' }}> 
        <div className='star'></div>
        <div className='star'></div>
        <div className='star'></div>
        <div className='star'></div>
        <div className='star'></div>
      </div>
      <div className='star-container'> 
        <div className='star'></div>
        <div className='star'></div>
        <div className='star'></div>
        <div className='star'></div>
        <div className='star'></div>
      </div>
      <Header/>
      <main className='py-3'>
        <Container>
          <Route exact path="/" component={Homepage} />
          <Route path='/classcalendar' component={ClassCalendarPage}/>
          <Route path='/resources' component={ResourcesPage}/>
          <Route path='/contact' component={ContactPage}/>
          <Route path='/aboutme' component={AboutMePage}/>
          <Route path='/adminlogin' component={AdminLoginPage}/>
          <Route path='/admin/resources' component={AddResourcePage}/>
          <Route path='/admin/calender' component={AddCalenderPage}/>
          <Route path='/admin/messages' component={CheckMessagePage}/>
        </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
