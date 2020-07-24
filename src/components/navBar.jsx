import React from "react";
import logo from "../image/dcodex.svg";
const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="navbar-brand">
          <img src={logo} alt="" />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <button className="nav-link nav-active">Home</button>
            </li>
            <li className="nav-item">
              <button className="nav-link">About Us</button>
            </li>
            <li className="nav-item">
              <button className="nav-link">Services</button>
            </li>
            <li className="nav-item">
              <button className="nav-link">Our Team</button>
            </li>
            <li className="nav-item">
              <button className="nav-link">Price Plans</button>
            </li>
            <li className="nav-item">
              <button className="nav-link">Testimonials</button>
            </li>
            <li className="nav-item">
              <button className="nav-link">Contact</button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
