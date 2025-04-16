import React from "react";
import { motion as m } from "framer-motion";
import { fadeIn } from "../Animations";
import { logo, education, work } from "../Data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const About = () => {
  return (
    <m.div className="about">
      <m.div
        className="about-logo"
        variants={fadeIn("right", "tween", 0.75, 1)}
        initial="hidden"
        animate="show"
      >
        <img alt={logo[0].title} src={logo[0].icon} />
      </m.div>
      <div className="about-container">
        <m.div
          className="about-me"
          variants={fadeIn("down", "tween", 0.75, 1)}
          initial="hidden"
          animate="show"
        >
          <div className="about-title">
            <h1>Professional Summary</h1>
          </div>
          <div className="about-inner">
            <p>
              Hello, I'm <span>Cristi Manea</span> and I'm a driven professional
              with over 6 years of experience across software development,
              automotive and home appliance industries. I'm always on the
              lookout for opportunities to learn, grow and take on meaningful
              work. With a solid mix of tech skills and hands-on engineering
              experience, I enjoy being part of teams that build cool, useful
              things and push ideas forward.
            </p>
            <a
              href="https://drive.google.com/file/d/14pN2hDVlVLmMHzwu-fT6BL0qDhHgr1S_/view?usp=drive_link"
              target="_blank"
            >
              Resume
            </a>
          </div>
        </m.div>
        <div className="education-work">
          <m.div
            className="education"
            variants={fadeIn("up", "tween", 0.75, 1)}
            initial="hidden"
            animate="show"
          >
            <div className="education-title">
              <h1>Education and Training</h1>
            </div>
            <div className="education-list">
              <Swiper
                className="education-slider"
                grabCursor={true}
                modules={[Pagination]}
                spaceBetween={25}
                slidesPerView={1}
                pagination={{ clickable: true, dynamicBullets: true }}
              >
                {education.map((item, i) => (
                  <SwiperSlide key={i} className={item.cName}>
                    {item.icon}
                    <h1>{item.title}</h1>
                    <p>{item.university}</p>
                    <p>{item.specialization}</p>
                    <p>{item.adress}</p>
                    <p>{item.date}</p>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </m.div>
          <m.div
            className="work"
            variants={fadeIn("left", "tween", 0.75, 1)}
            initial="hidden"
            animate="show"
          >
            <div className="work-title">
              <h1>Work Experience</h1>
            </div>
            <div className="work-list">
              <Swiper
                className="work-slider"
                grabCursor={true}
                modules={[Pagination]}
                spaceBetween={25}
                slidesPerView={1}
                pagination={{ clickable: true, dynamicBullets: true }}
              >
                {work.map((item, i) => (
                  <SwiperSlide key={i} className={item.cName}>
                    {item.icon}
                    <h1>{item.title}</h1>
                    <p>{item.company}</p>
                    <p>{item.description}</p>
                    <p>{item.adress}</p>
                    <p>{item.date}</p>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </m.div>
        </div>
      </div>
    </m.div>
  );
};

export default About;
