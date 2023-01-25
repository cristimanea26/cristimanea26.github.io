import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loader from './components/Loader/Loader.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './components/Home/Home.jsx';
import Projects from './components/Projects/Projects.jsx';
import Skills from './components/Skills/Skills.jsx';
import Contact from './components/Contact/Contact.jsx';
import ReactGA from 'react-ga';
import './App.css';

const App = () => {
  ReactGA.initialize('G-BXR0LZ45ZF');
  ReactGA.pageview(window.location.pathname + window.location.search);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  },[]);

  return (
    <div className='App'>
      { loading
      ? (<Loader />)
      : (<BrowserRouter>
            <Navbar />
              <Routes>
                  <Route path='/' exact element={<Home/>}/>
                  <Route path='/projects' element={<Projects/>}/>
                  <Route path='/skills' element={<Skills/>}/>
                  <Route path='/contact' element={<Contact/>}/>
              </Routes>
        </BrowserRouter>)
      }
    </div>
  )
}

export default App;