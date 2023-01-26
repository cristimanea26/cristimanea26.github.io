import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { menuData } from '../Data.jsx';
import './Menu.css';

const Menu = () => {

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <div className='menu'>
            <div className={sidebar ? 'menuBars open' : 'menuBars'} onClick={showSidebar}>
                <div className='line'></div>
            </div>
            <div className={sidebar ? 'navMenu active' : 'navMenu'}>
                <ul className='navMenuItems'>
                    {menuData.map((item, i) => {
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

export default Menu;