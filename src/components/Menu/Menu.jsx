import React, { useState } from "react";
import { Link } from "react-router-dom";
import { menuData } from "../Data";

const Menu = () => {
  const [menubar, setMenuBar] = useState(false);
  const showMenuBar = () => setMenuBar(!menubar);

  return (
    <div className="menu">
      <div
        className={menubar ? "menu-bars open" : "menu-bars"}
        onClick={showMenuBar}
      >
        <div className="line"></div>
      </div>
      <div className={menubar ? "menu-list active" : "menu-list"}>
        <ul className="menu-list-items">
          {menuData.map((item, i) => (
            <li key={i} className={item.cName}>
              <Link to={item.path} onClick={showMenuBar}>
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
