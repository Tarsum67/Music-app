import React from 'react'
import '../App.css'
import { sidebarData } from './sidebarData';
function Sidebar() {
  return (
    <div className='Sidebar'>
        <ul className='SidebarList'>
        {sidebarData.map((val,key) =>{
        return(
            <li ke={key} 
            className='row'
            id={window.location.pathname == val.link ? "active" : "" }
            onClick={()=> {window.location.pathname = val.link}}>
                {""}
                <div id='icon'>{val.icon}</div>{""}
                <div id='title'>
                    {val.title}
                </div>
                </li>
        )
    })}
    </ul>
    </div>
  );
}

export default Sidebar
