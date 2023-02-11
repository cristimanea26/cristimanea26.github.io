import React from 'react';
import { motion as m } from 'framer-motion';
import { fadeIn } from '../Animations.jsx';
import { webTechs, designTechs, gameTechs, otherTechs } from '../Data.jsx';
import './Skills.css';

const Skills = () => {
  return (
    <m.div className='skills'>
      <m.div
        className='skillsTitle'
        variants={fadeIn('down', 'tween', 0.75, 1)}
        initial='hidden'
        animate='show'
      >
        <h1>My skills</h1>
        <h3>These are the technologies that I've worked with</h3>
      </m.div>
      <div className='skillsContainer'>
        <div className='skillsTop'>
          <m.div
            className='skillsInner'
            variants={fadeIn('right', 'tween', 0.75, 1)}
            initial='hidden'
            animate='show'
          >
            <div className='techsTitle'>
              <h1>Web</h1>
            </div>
            <div className='techsList'>
              {webTechs.map((item, i) => {
                return (
                  <div key={i} className={item.cName}>
                    {item.icon}
                    <h2>{item.title}</h2>
                    <h1>Experience: {item.experience}</h1>
                  </div>
                );
              })}
            </div>
          </m.div>
          <m.div
            className='skillsInner'
            variants={fadeIn('down', 'tween', 0.75, 1)}
            initial='hidden'
            animate='show'
          >
            <div className='techsTitle'>
              <h1>Design</h1>
            </div>
            <div className='techsList'>
              {designTechs.map((item, i) => {
                return (
                  <div key={i} className={item.cName}>
                    {item.icon}
                    <h2>{item.title}</h2>
                    <h1>Experience: {item.experience}</h1>
                  </div>
                );
              })}
            </div>
          </m.div>
        </div>
        <div className='skillsBottom'>
          <m.div
            className='skillsInner'
            variants={fadeIn('up', 'tween', 0.75, 1)}
            initial='hidden'
            animate='show'
          >
            <div className='techsTitle'>
              <h1>Game</h1>
            </div>
            <div className='techsList'>
              {gameTechs.map((item, i) => {
                return (
                  <div key={i} className={item.cName}>
                    {item.icon}
                    <h2>{item.title}</h2>
                    <h1>Experience: {item.experience}</h1>
                  </div>
                );
              })}
            </div>
          </m.div>
          <m.div
            className='skillsInner'
            variants={fadeIn('left', 'tween', 0.75, 1)}
            initial='hidden'
            animate='show'
          >
            <div className='techsTitle'>
              <h1>Other</h1>
            </div>
            <div className='techsList'>
              {otherTechs.map((item, i) => {
                return (
                  <div key={i} className={item.cName}>
                    {item.icon}
                    <h2>{item.title}</h2>
                    <h1>Experience: {item.experience}</h1>
                  </div>
                );
              })}
            </div>
          </m.div>
        </div>
      </div>
    </m.div>
  );
};

export default Skills;
