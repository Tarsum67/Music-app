
import React from 'react';
import { NavLink } from 'react-router-dom';
import { sidebarData } from "./sidebarData";


function Sidebar() {
  return (
    <div className="Display">
      <ul className="Sidebar">
        <div className="sideBarContent">
          {sidebarData.map((val, key) => (
            <li key={key} className="sideBarRow">
              <NavLink to={val.link} className="linkRow"exact="true" onClick={() => handleLinkClick(val.link)}>
                <div id="icon">{val.icon}</div>
                <div id="title">{val.title}</div>
              </NavLink>
            </li>
          ))}
        </div>
      </ul>
      
    </div>
  );
}

export default Sidebar;

