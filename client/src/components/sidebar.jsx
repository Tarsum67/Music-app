import "../App.css";
import { sidebarData } from "./sidebarData";
import Main from "./Main"

function Sidebar({ children }) {
  return (
    <div className="Display">
      <ul className="Sidebar">
        <div className="sideBarContent">
        {sidebarData.map((val, key) => (

          <li
            key={key}
            className="row"
            id={window.location.pathname === val.link ? "active" : ""}
            onClick={() => (window.location.pathname = val.link)}
            >
            <div id="icon">{val.icon}</div>
            <div id="title">{val.title}</div>
          </li>
        ))}
            </div>
      </ul>
      <Main>
        {children}
      </Main>
    </div>
  );
}

export default Sidebar;
