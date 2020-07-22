import React from "react";
import logo from "../image/dcodex.svg";
const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <a href="#" className="navbar-brand">
          <img src={logo} alt="" />
        </a>
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
              <a href="#" className="nav-link nav-active">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a href="#services" className="nav-link">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="#team" className="nav-link">
                Our Team
              </a>
            </li>
            <li className="nav-item">
              <a href="#price" className="nav-link">
                Price Plans
              </a>
            </li>
            <li className="nav-item">
              <a href="#testimonials" className="nav-link">
                Testimonials
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
