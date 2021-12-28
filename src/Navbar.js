import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <div className="navbar-nav" style={{flexDirection: 'row'}}>
          <Link to="/main" className="nav-link mx-3">
            Main
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
