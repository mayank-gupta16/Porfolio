import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid">
          <a className="navbar-brand ms-5" href="#">
            MKGupta
          </a>
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
            <ul className="navbar-nav ms-auto fs-5 d-flex " style={{"marginRight":"8rem"}}>
              <li className="nav-item ">
                <div>
                  <a className="nav-link" aria-current="page" href="#">
                    Home
                  </a>
                </div>
              </li>
              <li className="nav-item ">
                <div>
                  <a className="nav-link" href="#">
                    Blog
                  </a>
                </div>
              </li>
              <li className="nav-item ">
                <div>
                  <a className="nav-link" href="#">
                    Project
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <div>
                  <a
                    className="nav-link"
                    href="#"
                  >
                    Contact
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
