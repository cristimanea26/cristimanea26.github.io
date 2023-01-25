import React from 'react';
import { motion as m } from 'framer-motion';
import { fadeIn } from '../Animations.jsx';
import './Loader.css';

const Loader = () => {
    return (
        <m.div className='loader' variants={fadeIn} initial='hidden' animate='show'>
            <div className='loader-inner'></div>
        </m.div>
    )
}

export default Loader;