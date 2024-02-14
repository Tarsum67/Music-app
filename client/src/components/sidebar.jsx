import "../App.css";
import { sidebarData } from "./sidebarData";

function Sidebar({ children }) {
  return (
    <div className="Display">
      <ul className="Sidebar">
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
      </ul>
      <main className="Content">{children}</main>
    </div>
  );
}

export default Sidebar;
