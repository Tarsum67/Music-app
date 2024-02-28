// import "../App.css";
// import { sidebarData } from "./sidebarData";
// import Main from "./Main";
// import { NavLink } from 'react-router-dom';

// function Sidebar({ children }) {
//   return (
//     <div className="Display">
//       <ul className="Sidebar">
//         <div className="sideBarContent">
//           {sidebarData.map((val, key) => (
//             <li
//               key={key}
//               className="row"
//               id={window.location.pathname === val.link ? "active" : ""}
//               // onClick={() => (window.location.pathname = val.link)}
//             >
//                 <NavLink to={val.link} activeClassName="active"></NavLink>
//               <div id="icon">{val.icon}</div>
//               <div id="title">{val.title}</div>
//             </li>
//           ))}
//         </div>
//       </ul>
//       <Main>{children}</Main>
//     </div>
//   );
// }

// export default Sidebar;
import React from 'react';
import { NavLink } from 'react-router-dom';
import { sidebarData } from "./sidebarData";


function Sidebar() {
  return (
    <div className="Display">
      <ul className="Sidebar">
        <div className="sideBarContent">
          {sidebarData.map((val, key) => (
            <li key={key} className="row">
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

