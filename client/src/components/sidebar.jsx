

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../App.css';
import { sidebarData } from './sidebarData';


function Sidebar({ children }) {
  const location = useLocation();
  const [selectedLink, setSelectedLink] = useState(null);

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };
  return (
    <div className='Display'>
      <ul className='Sidebar'>
        {sidebarData.map((val, key) => (
          <li key={key} 
          className='row'
          id={location.pathname === val.link ? 'active' : ''}
          onClick={() => handleLinkClick(val.link)}
          >
            <Link to={val.link}>
              <div id='icon'>{val.icon}</div>
              <div id='title'>{val.title}</div>
            </Link>
          </li>
        ))}
      </ul>
      <main className='Content'>{children}</main>
    </div>
  );
}

export default Sidebar;
