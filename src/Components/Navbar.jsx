import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid">
          <NavLink className="navbar-brand ms-5" href="#">
            Mk Gupta
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul
              className="navbar-nav ms-auto fs-5 d-flex "
              style={{ marginRight: "8rem" }}
            >
              <li className="nav-item ">
                <div>
                  <NavLink to="/Home" className="nav-link" href="#">
                    Home
                  </NavLink>
                </div>
                <div className="underline"></div>
              </li>
              <li className="nav-item ">
                <div>
                  <NavLink to="/BlogGroup" className="nav-link" href="#">
                    Blog
                  </NavLink>
                </div>
                <div className="underline"></div>
              </li>
              <li className="nav-item ">
                <div>
                  <NavLink to="/Project" className="nav-link" href="#">
                    Project
                  </NavLink>
                </div>
                <div className="underline"></div>
              </li>
              <li className="nav-item">
                <div>
                  <NavLink to="/Contact" className="nav-link" href="#">
                    Contact
                  </NavLink>
                  <div className="underline bg-black"></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
