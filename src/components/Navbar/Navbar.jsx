import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { sidebarData } from '../Data.jsx';
import './Navbar.css';

const Navbar = () => {

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <div className='navbar'>
            <div className={sidebar ? 'menuBars open' : 'menuBars'} onClick={showSidebar}>
                <div className='line'></div>
            </div>
            <div className={sidebar ? 'navMenu active' : 'navMenu'}>
                <ul className='navMenuItems'>
                    {sidebarData.map((item, i) => {
                        return (
                            <li key={i} className={item.cName}>
                                <Link to={item.path} onClick={showSidebar}>
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Navbar;