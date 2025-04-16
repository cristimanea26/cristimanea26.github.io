import React from "react";
import { motion as m } from "framer-motion";
import { fadeIn } from "../Animations";
import { web, design, academics } from "../Data";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";

const Projects = () => {
  return (
    <m.div className="projects">
      <m.div
        className="projects-title"
        variants={fadeIn("down", "tween", 0.75, 1)}
        initial="hidden"
        animate="show"
      >
        <h1>My personal projects</h1>
      </m.div>
      <div className="projects-container">
        <m.div
          className="projects-inner"
          variants={fadeIn("right", "tween", 0.75, 1)}
          initial="hidden"
          animate="show"
        >
          <div className="field-title">
            <h1>Web</h1>
          </div>
          <div className="field-project-list">
            <Swiper
              className="field-project-slider"
              grabCursor={true}
              effect={"creative"}
              creativeEffect={{
                prev: {
                  shadow: true,
                  origin: "left center",
                  translate: ["-5%", 0, -200],
                  rotate: [0, 100, 0],
                },
                next: {
                  origin: "right center",
                  translate: ["5%", 0, -200],
                  rotate: [0, -100, 0],
                },
              }}
              pagination={{ clickable: true, dynamicBullets: true }}
              modules={[EffectCreative, Pagination]}
            >
              {web.map((item, i) => (
                <SwiperSlide key={i} className="project-item">
                  <div
                    className="project-item-image"
                    style={{ backgroundImage: `url(${item.image})` }}
                  ></div>
                  <div className="project-item-info">
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <a href={item.path} target="_blank">
                      Open the project
                    </a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </m.div>
        <m.div
          className="projects-inner"
          variants={fadeIn("up", "tween", 0.75, 1)}
          initial="hidden"
          animate="show"
        >
          <div className="field-title">
            <h1>Design</h1>
          </div>
          <div className="field-project-list">
            <Swiper
              className="field-project-slider"
              grabCursor={true}
              effect={"creative"}
              creativeEffect={{
                prev: {
                  shadow: true,
                  origin: "left center",
                  translate: ["-5%", 0, -200],
                  rotate: [0, 100, 0],
                },
                next: {
                  origin: "right center",
                  translate: ["5%", 0, -200],
                  rotate: [0, -100, 0],
                },
              }}
              pagination={{ clickable: true, dynamicBullets: true }}
              modules={[EffectCreative, Pagination]}
            >
              {design.map((item, i) => (
                <SwiperSlide key={i} className="project-item">
                  <div
                    className="project-item-image"
                    style={{ backgroundImage: `url(${item.image})` }}
                  ></div>
                  <div className="project-item-info">
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <a href={item.path} target="_blank">
                      Open the project
                    </a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </m.div>
        <m.div
          className="projects-inner"
          variants={fadeIn("left", "tween", 0.75, 1)}
          initial="hidden"
          animate="show"
        >
          <div className="field-title">
            <h1>Academics</h1>
          </div>
          <div className="field-project-list">
            <Swiper
              className="field-project-slider"
              grabCursor={true}
              effect={"creative"}
              creativeEffect={{
                prev: {
                  shadow: true,
                  origin: "left center",
                  translate: ["-5%", 0, -200],
                  rotate: [0, 100, 0],
                },
                next: {
                  origin: "right center",
                  translate: ["5%", 0, -200],
                  rotate: [0, -100, 0],
                },
              }}
              pagination={{ clickable: true, dynamicBullets: true }}
              modules={[EffectCreative, Pagination]}
            >
              {academics.map((item, i) => (
                <SwiperSlide key={i} className="project-item">
                  <div
                    className="project-item-image"
                    style={{ backgroundImage: `url(${item.image})` }}
                  ></div>
                  <div className="project-item-info">
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <a href={item.path} target="_blank">
                      Open the project
                    </a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </m.div>
      </div>
    </m.div>
  );
};

export default Projects;
