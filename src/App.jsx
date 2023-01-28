import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Loader from './components/Loader/Loader.jsx';
import Menu from './components/Menu/Menu.jsx';
import Home from './components/Home/Home.jsx';
import Projects from './components/Projects/Projects.jsx';
import Skills from './components/Skills/Skills.jsx';
import Contact from './components/Contact/Contact.jsx';
import ReactGA from 'react-ga';
import './App.css';

const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  
  ReactGA.initialize('G-BXR0LZ45ZF');
  ReactGA.pageview(window.location.pathname + window.location.search);
  
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
      : (<div className='content'>
            <Menu />
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home/>}/>
                <Route path='/projects' element={<Projects/>}/>
                <Route path='/skills' element={<Skills/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
          </div>
        )
      }
    </div>
  )
}

export default App;