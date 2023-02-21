import React, { useRef } from 'react';
import { motion as m } from 'framer-motion';
import { fadeIn } from '../Animations.jsx';
import { contactA, contactB } from '../Data.jsx';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_y6ssthb',
        'template_ts1gjn9',
        form.current,
        '459VfQgE7HmxE-NHB'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <m.div className='contact'>
      <m.div
        className='contactTitle'
        variants={fadeIn('down', 'tween', 0.75, 1)}
        initial='hidden'
        animate='show'
      >
        <h1>Contact Me</h1>
        <h3>Get in touch</h3>
      </m.div>
      <div className='contactContainer'>
        <m.div
          className='contactOptions'
          variants={fadeIn('right', 'tween', 0.75, 1)}
          initial='hidden'
          animate='show'
        >
          <div className='contactOptionsTop'>
            {contactA.map((item, i) => {
              return (
                <div key={i} className={item.cName}>
                  <a href={item.path} target='_blank'>
                    {item.icon}
                    <span>{item.title}</span>
                  </a>
                </div>
              );
            })}
          </div>
          <div className='contactOptionsBottom'>
            {contactB.map((item, i) => {
              return (
                <div key={i} className={item.cName}>
                  <a href={item.path} target='_blank'>
                    {item.icon}
                  </a>
                </div>
              );
            })}
          </div>
        </m.div>
        <m.div
          className='contactForm'
          variants={fadeIn('left', 'tween', 0.75, 1)}
          initial='hidden'
          animate='show'
        >
          <form ref={form} onSubmit={sendEmail}>
            <input text='text' name='name' placeholder='Name' required />
            <input text='email' name='email' placeholder='Email' required />
            <input
              text='subject'
              name='subject'
              placeholder='Subject'
              required
            />
            <textarea
              name='message'
              cols='30'
              rows='10'
              placeholder='Message'
              required
            ></textarea>
            <button type='submit' className='btn btn-primary'>
              Send
            </button>
          </form>
        </m.div>
      </div>
    </m.div>
  );
};

export default Contact;
