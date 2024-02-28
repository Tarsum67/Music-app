import React from "react";

export default function NavBar() {
  return (
    <div className="navBarContent">
      <div className="navSearchBar">
        <input type="text" placeholder="search" />
        <button>Search</button>
      </div>
    </div>
  );
}
