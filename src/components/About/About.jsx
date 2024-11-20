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
            <h1>About</h1>
          </div>
          <div className="about-inner">
            <p>
              Hello, I'm <span>Cristi Manea</span> and I am a professional with
              over six years of diversified experience in the IT, automotive and
              home appliance industries. With an innovative vision and a
              constant desire to learn, I have contributed to the development of
              products and technologies in these dynamic industries. My strong
              technical skills are matched by a passion for development, making
              me a valuable team member in any endeavor.
            </p>
            <a
              href="https://drive.google.com/file/d/1R8xMsIeaBRubTcuB6U0HcgVQROe5dstp/view?usp=sharing"
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
