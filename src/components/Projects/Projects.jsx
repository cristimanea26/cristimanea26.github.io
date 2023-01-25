import React from 'react';
import { motion as m } from 'framer-motion';
import { fadeIn } from '../Animations.jsx';
import { webDev, design, gameDev } from '../Data.jsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';
import './Projects.css';

const Projects = () => {
    return (
        <m.div className='projects' variants={fadeIn} initial='hidden' animate='show'>
            <m.div className='projectsTitle' variants={fadeIn('down', 'tween', 0.75, 1)} initial='hidden' animate='show'>
                <h1>My personal projects</h1>
            </m.div>
            <div className='projectsContainer'>
                <m.div className='projectsInner' variants={fadeIn('right', 'tween', 0.75, 1)} initial='hidden' animate='show'>
                    <div className='fieldTitle'>
                        <h1>Web Development</h1>
                    </div>
                    <div className='fieldProjectList'>
                        <Swiper className='fieldProjectSlider' grabCursor={true} effect={'creative'} creativeEffect={{ prev: {shadow: true, origin: 'left center', translate: ['-5%', 0, -200], rotate: [0, 100, 0]}, next: {origin: 'right center', translate: ['5%', 0, -200], rotate: [0, -100, 0]} }} pagination={{ clickable: true, dynamicBullets: true }} modules={[EffectCreative, Pagination]}>
                            {webDev.map((item, i) => {
                                return (
                                    <SwiperSlide key={i} className='projectItem'>
                                        <div className='projectItemImage' style={{ backgroundImage: `url(${item.image})` }}></div>
                                        <div className='projectItemInfo'><h1>{item.title}</h1><p>{item.description}</p><a href={item.path} target='_blank'>Open the project</a></div>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </div>
                </m.div>
                <m.div className='projectsInner' variants={fadeIn('up', 'tween', 0.75, 1)} initial='hidden' animate='show'>
                    <div className='fieldTitle'>
                        <h1>Design</h1>
                    </div>
                    <div className='fieldProjectList'>
                        <Swiper className='fieldProjectSlider' grabCursor={true} effect={'creative'} creativeEffect={{ prev: {shadow: true, origin: 'left center', translate: ['-5%', 0, -200], rotate: [0, 100, 0]}, next: {origin: 'right center', translate: ['5%', 0, -200], rotate: [0, -100, 0]} }} pagination={{ clickable: true, dynamicBullets: true }} modules={[EffectCreative, Pagination]}>
                            {design.map((item, i) => {
                                return (
                                    <SwiperSlide key={i} className='projectItem'>
                                        <div className='projectItemImage' style={{ backgroundImage: `url(${item.image})` }}></div>
                                        <div className='projectItemInfo'><h1>{item.title}</h1><p>{item.description}</p><a href={item.path} target='_blank'>Open the project</a></div>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </div>
                </m.div>
                <m.div className='projectsInner' variants={fadeIn('left', 'tween', 0.75, 1)} initial='hidden' animate='show'>
                    <div className='fieldTitle'>
                        <h1>Game Development</h1>
                    </div>
                    <div className='fieldProjectList'>
                        <Swiper className='fieldProjectSlider' grabCursor={true} effect={'creative'} creativeEffect={{ prev: {shadow: true, origin: 'left center', translate: ['-5%', 0, -200], rotate: [0, 100, 0]}, next: {origin: 'right center', translate: ['5%', 0, -200], rotate: [0, -100, 0]} }} pagination={{ clickable: true, dynamicBullets: true }} modules={[EffectCreative, Pagination]}>
                            {gameDev.map((item, i) => {
                                return (
                                    <SwiperSlide key={i} className='projectItem'>
                                        <div className='projectItemImage' style={{ backgroundImage: `url(${item.image})` }}></div>
                                        <div className='projectItemInfo'><h1>{item.title}</h1><p>{item.description}</p><a href={item.path} target='_blank'>Open the project</a></div>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </div>
                </m.div>
            </div>
        </m.div>
    )
}

export default Projects;