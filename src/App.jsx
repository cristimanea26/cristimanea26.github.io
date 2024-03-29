import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import Menu from "./components/Menu/Menu";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import ReactGA from "react-ga4";

const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  const TRACKING_ID = "G-5FBZ21RZDF";
  ReactGA.initialize(TRACKING_ID);
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname + window.location.search,
    title: "Personal Portfolio",
  });

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <div className="content">
          <Menu />
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      )}
    </div>
  );
};

export default App;
