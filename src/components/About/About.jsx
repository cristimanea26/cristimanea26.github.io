import React from 'react';
import { motion as m } from 'framer-motion';
import { fadeIn } from '../Animations.jsx';
import { logo, education, work } from '../Data.jsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const About = () => {
  return (
    <m.div className='about'>
      <m.div
        className='aboutLogo'
        variants={fadeIn('right', 'tween', 0.75, 1)}
        initial='hidden'
        animate='show'
      >
        <img alt={logo[0].title} src={logo[0].icon} />
      </m.div>
      <div className='aboutContainer'>
        <m.div
          className='aboutMe'
          variants={fadeIn('down', 'tween', 0.75, 1)}
          initial='hidden'
          animate='show'
        >
          <div className='aboutTitle'>
            <h1>About</h1>
          </div>
          <div className='aboutInner'>
            <p>
              Hello, I'm <span>Cristi Manea</span> and I make web applications,
              3D art for games and sometimes I build games.
            </p>
            <a
              href='https://drive.google.com/file/d/1x30R-lrg9RqErI1hQQ9fW5zhgxSKXI3r/view?usp=sharing'
              target='_blank'
            >
              Resume
            </a>
          </div>
        </m.div>
        <div className='educationWork'>
          <m.div
            className='education'
            variants={fadeIn('up', 'tween', 0.75, 1)}
            initial='hidden'
            animate='show'
          >
            <div className='educationTitle'>
              <h1>Education and Training</h1>
            </div>
            <div className='educationList'>
              <Swiper
                className='educationSlider'
                modules={[Pagination]}
                spaceBetween={25}
                slidesPerView={1}
                pagination={{ clickable: true, dynamicBullets: true }}
              >
                {education.map((item, i) => {
                  return (
                    <SwiperSlide key={i} className={item.cName}>
                      {item.icon}
                      <h1>{item.title}</h1>
                      <p>{item.university}</p>
                      <p>{item.specialization}</p>
                      <p>{item.adress}</p>
                      <p>{item.date}</p>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </m.div>
          <m.div
            className='work'
            variants={fadeIn('left', 'tween', 0.75, 1)}
            initial='hidden'
            animate='show'
          >
            <div className='workTitle'>
              <h1>Work Experience</h1>
            </div>
            <div className='workList'>
              <Swiper
                className='workSlider'
                modules={[Pagination]}
                spaceBetween={25}
                slidesPerView={1}
                pagination={{ clickable: true, dynamicBullets: true }}
              >
                {work.map((item, i) => {
                  return (
                    <SwiperSlide key={i} className={item.cName}>
                      {item.icon}
                      <h1>{item.title}</h1>
                      <p>{item.company}</p>
                      <p>{item.description}</p>
                      <p>{item.adress}</p>
                      <p>{item.date}</p>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </m.div>
        </div>
      </div>
    </m.div>
  );
};

export default About;
