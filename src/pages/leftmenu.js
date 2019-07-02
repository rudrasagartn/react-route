import React from 'react'
import {Link} from 'react-router-dom'
function LeftMenu() {
  return (
    <div className="list-group list-group-flush">
      <ul className="navbar-nav footer table-responsive-lg">
        <li className="nav-item-sidebar list-group-item-action list-group-item">
          <Link to={"/home"} className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item-sidebar list-group-item-action list-group-item">
          <Link to={"/about"} className="nav-link">
            About
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default LeftMenu;
