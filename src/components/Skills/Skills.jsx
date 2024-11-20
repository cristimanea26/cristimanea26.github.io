import React from "react";
import { motion as m } from "framer-motion";
import { fadeIn } from "../Animations";
import { webTechs, designTechs, otherTechs } from "../Data";

const Skills = () => {
  return (
    <m.div className="skills">
      <m.div
        className="skills-title"
        variants={fadeIn("down", "tween", 0.75, 1)}
        initial="hidden"
        animate="show"
      >
        <h1>My skills</h1>
        <h3>These are the technologies that I've worked with</h3>
      </m.div>
      <div className="skills-container">
        <m.div
          className="skills-inner"
          variants={fadeIn("right", "tween", 0.75, 1)}
          initial="hidden"
          animate="show"
        >
          <div className="techs-title">
            <h1>Web</h1>
          </div>
          <div className="techs-list">
            {webTechs.map((item, i) => (
              <div key={i} className={item.cName}>
                {item.icon}
                <h2>{item.title}</h2>
              </div>
            ))}
          </div>
        </m.div>
        <m.div
          className="skills-inner"
          variants={fadeIn("up", "tween", 0.75, 1)}
          initial="hidden"
          animate="show"
        >
          <div className="techs-title">
            <h1>Design</h1>
          </div>
          <div className="techs-list">
            {designTechs.map((item, i) => (
              <div key={i} className={item.cName}>
                {item.icon}
                <h2>{item.title}</h2>
              </div>
            ))}
          </div>
        </m.div>
        <m.div
          className="skills-inner"
          variants={fadeIn("left", "tween", 0.75, 1)}
          initial="hidden"
          animate="show"
        >
          <div className="techs-title">
            <h1>Other</h1>
          </div>
          <div className="techs-list">
            {otherTechs.map((item, i) => (
              <div key={i} className={item.cName}>
                {item.icon}
                <h2>{item.title}</h2>
                <h1>Experience: {item.experience}</h1>
              </div>
            ))}
          </div>
        </m.div>
      </div>
    </m.div>
  );
};

export default Skills;
