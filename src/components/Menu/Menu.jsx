import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { menuData } from '../Data.jsx';
import './Menu.css';

const Menu = () => {
  const [menubar, setMenuBar] = useState(false);
  const showMenuBar = () => setMenuBar(!menubar);

  return (
    <div className='menu'>
      <div
        className={menubar ? 'menuBars open' : 'menuBars'}
        onClick={showMenuBar}
      >
        <div className='line'></div>
      </div>
      <div className={menubar ? 'menuList active' : 'menuList'}>
        <ul className='menuListItems'>
          {menuData.map((item, i) => {
            return (
              <li key={i} className={item.cName}>
                <Link to={item.path} onClick={showMenuBar}>
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
