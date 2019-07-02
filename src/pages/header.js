import React from "react";

function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary-navbar-custom">
      <div className="container-fluid">
        <div className="nav-item" href="#">
          <h3>Sowing App</h3>
        </div>
        <span class="d-block p-2 text-white">
          Username,
          <button class="btn btn-outline-info text-white" type="submit">
            Logout
          </button>
        </span>
      </div>
    </nav>
  );
}

export default Header;
